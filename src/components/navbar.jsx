import { useState, useEffect } from "react";
import Header from "./header";
import './navbar.css'

function Navbar() {
    const [scrollNavbar, setScrollNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 10) {
            setScrollNavbar(true)
        } else {
            setScrollNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    return(
        <div className={`fixed w-full z-20 top-0 start-0`}>
            <div className="relative">
                <div className={`${scrollNavbar ? "opacity-[.75]" : "opacity-100"} bg-white w-full absolute z-[-10] h-full`}></div>
                <div className="z-[10000] w-full">
                    <Header />
                    <nav className="">
                        <ul className="w-full h-11 text-center">
                            <li className="inline-block mx-4 cursor-pointer">HOME</li>
                            <li className="inline-block mx-4 cursor-pointer">SHOP</li>
                            <li className="inline-block mx-4 cursor-pointer">LOOKBOOK</li>
                            <li className="inline-block mx-4 cursor-pointer">ABOUT</li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>

    )
}

export default Navbar;