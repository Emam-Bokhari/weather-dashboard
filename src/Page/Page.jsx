import { Fragment } from "react"
import Header from "../Header/Header"
import WeatherBoard from "../WeatherBoard/WeatherBoard"
import climateImage from "../assets/backgrounds/winter.jpg"

const Page = () => {
    return (
        <Fragment>
            <div style={{ backgroundImage: `url('${climateImage}')` }}className="grid place-items-center h-screen bg-no-repeat bg-cover">
                <Header />
                <main>
                    <section>
                        <WeatherBoard />
                    </section>
                </main>
            </div>
        </Fragment>
    )
}
export default Page