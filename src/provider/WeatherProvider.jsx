import { WeatherContext } from "../contexts"
import { useWeather } from "../hooks"

const WeatherProvider = ({ children }) => {
    const {weatherData,error,loading}=useWeather()
    return (
        <WeatherContext.Provider value={{weatherData,loading,error}} >
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherProvider 