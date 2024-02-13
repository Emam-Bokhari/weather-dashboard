import { useEffect, useState } from "react"

const useWeather = () => {

    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temprature: "",
        maxTemprature: "",
        minTemprature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    })

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    })

    const [error, setError] = useState(null)

    const fetchWeatherData = async (longitude, latitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching Weather Data..."
            })

            // fetching data
            const responese = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
            if (!responese.ok) {
                const errorMessage = `Fetching weather data failed:${responese.status}`
                throw new Error(errorMessage)
            }

            const data = await responese.json()

            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temprature: data?.temp,
                maxTemprature: data?.temp_max,
                minTemprature: data?.temp_min,
                humidity: data?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude
            }

            setWeatherData(updateWeatherData)

        } catch (err) {
            setError(error)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            })
        }
    }

    useEffect(()=>{
        setLoading({
            ...loading,
            state:true,
            message:"Finding Location..."
        })
        navigator.geolocation.getCurrentPosition(function(position){
            fetchWeatherData(position.coords.longitude,position.coords.latitude)
        })
        
    },[])

    return {
        weatherData,
        error,
        loading
    }

}

export default useWeather