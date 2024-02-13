import { Fragment } from "react"
import AddToFavourite from "./AddToFavourite"
import WeatherHeadline from "./WeatherHeadline"
import WeatherCondition from "./WeatherCondition"

const WeatherBoard = () => {
    return (
        <Fragment>
            <main>

                {/* Begin Weather */}
                <section>
                    <div className="container">
                        <div
                            className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                                <div className="md:col-span-2">
                                    {/* AddToFavourite */}
                                    <AddToFavourite />
                                </div>
                                {/* WeatherHeadline */}
                                <WeatherHeadline />
                                {/* WeatherCondtion */}
                                <WeatherCondition />
                            </div>
                        </div>

                    </div>
                </section>
                {/* End Weather */}

            </main>
        </Fragment>
    )
}
export default WeatherBoard