import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
                        <ul className="w-full h-11 text-center ">
                            <Link to={"/"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">HOME</Link>
                            <Link to={"/shop"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">SHOP</Link>
                            {/* <Link to={"/lookbook"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">LOOKBOOK</Link> */}
                            <Link to={"/about-us"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">ABOUT</Link>
                            <Link to={"/crasher-music-merchandise"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">CRASHER MUSIC MERCHANDISE</Link>
                            <Link to={"/cmm-apparel"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">CMM Apparel</Link>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>

    )
}

export default Navbar;