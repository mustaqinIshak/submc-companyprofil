import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../api/brands";
import Header from "./header";
import './navbar.css'

function Navbar() {
    const [scrollNavbar, setScrollNavbar] = useState(false)
    const [brands, setBrands] = useState([])
    const [showBrands, setShowBrands] = useState(false)
    const getAllBrands = async () => {
        const result = await getBrands()
        if(result) {
            console.log('ini d navbar',result)
            setBrands([...result])
        }
    }

    const changeBackground = () => {
        if(window.scrollY >= 10) {
            setScrollNavbar(true)
        } else {
            setScrollNavbar(false)
        }
    }

    useEffect(() => {
        getAllBrands()
    },[])

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
                            <>
                                <span onClick={() => setShowBrands(!showBrands)} className=" text-black font-normal mx-4 hover:text-slate-600 inline-block cursor-pointer">BRANDS</span>
                                
                            </>
                            {/* <Link to={"/lookbook"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">LOOKBOOK</Link> */}
                            <Link to={"/about-us"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">ABOUT</Link>
                            {/* <Link to={"/crasher-music-merchandise"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">CRASHER MUSIC MERCHANDISE</Link>
                            <Link to={"/cmm-apparel"} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer">CMM APPAREL</Link> */}
                            {/* <div id="dropdown" className={`${!showBrands ? "hidden" : "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"}`}> */}
                            
                            <ul className={`${!showBrands ? "hidden" : "z-10 mt-5 text-[12px]"}`} aria-labelledby="dropdownBrandButton">
                                {
                                    brands.length !== 0 ? brands.map((item, index) => 
                                        <Link key={index} to={`/brands/${item.name}/${item.id}`} className="text-black font-normal hover:text-slate-600 inline-block mx-4 cursor-pointer uppercase">
                                            {item.name}
                                        </Link>
                                    )
                                    :null
                                }
                            </ul>
                                       
                                    
                                {/* </div> */}
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </div>

    )
}

export default Navbar;