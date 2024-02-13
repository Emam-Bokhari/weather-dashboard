import { Fragment, useContext } from "react"
import { WeatherContext } from "../contexts"
import pinIcon from "../assets/pin.svg"
import clouds from "../assets/icons/cloud.svg"
import snow from "../assets/icons/snow.svg"
import sunny from "../assets/icons/sunny.svg"
import haze from "../assets/haze.svg"
import rainy from "../assets/rainy.svg"
import thunder from "../assets/thunder.svg"

const WeatherHeadline = () => {

    const { weatherData } = useContext(WeatherContext)
    const {temprature,location,time,climate}=weatherData

    function getWeatherIcon(climate){
        switch(climate){
            case "Rain": 
                return rainy
            case "Clouds": 
                return clouds
            case "Clear": 
                return sunny
            case "Snow": 
                return snow
            case "Thunder": 
                return thunder
            case "Fog": 
                return haze
            case "Haze": 
                return haze
            case "Mist": 
                return haze
            default:
                return sunny
        }
    }


    return (
        <Fragment>
            <div>
                <div className="max-md:flex items-center justify-between md:-mt-10">
                    <img src={getWeatherIcon(climate)} alt="Climate icon" />
                    <div className="max-md:flex items-center max-md:space-x-4">
                        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temprature)}°</h1>
                        <div className="flex items-center space-x-4 md:mb-4">
                            <img src={pinIcon} />
                            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                        </div>
                    </div>
                </div>
                <p className="text-sm lg:text-lg">{time}</p>
            </div>
        </Fragment>
    )
}
export default WeatherHeadline