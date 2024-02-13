import { Fragment } from "react"
import Searchbar from "./Searchbar"
import FavouriteLocation from "./FavouriteLocation"
import Modal from "./FavouriteListModal"
import logo from "../assets/logo.svg"

const Header = () => {
    return (
        <Fragment>
            <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
                <nav className="container flex items-center justify-between py-6">
                    <a href="./index.html">
                        <img className="h-9" src={logo} alt="Weather App" />
                    </a>

                    <div className="flex items-center gap-4 relative">
                        {/* Searchbar */}
                        <Searchbar />
                        {/* FavouriteLocation */}
                        <FavouriteLocation />
                        {/* Modal */}
                        <Modal />

                    </div>
                </nav>
            </header>
        </Fragment>
    )
}
export default Header