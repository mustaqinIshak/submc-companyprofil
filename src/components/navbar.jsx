import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { getBrands } from "../api/brands";
import crasherLogoBlack from "../assets/logo/logoCrasher.png"

function Navbar() {
    const [scrollNavbar, setScrollNavbar] = useState(false)
    const [brands, setBrands] = useState([])
    const [showBrands, setShowBrands] = useState(false)
    const location = useLocation()
    const dropdownRef = useRef(null)

    const getAllBrands = async () => {
        const result = await getBrands()
        if(result) {
            setBrands([...result])
        }
    }

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setScrollNavbar(true)
        } else {
            setScrollNavbar(false)
        }
    }

    // Close the dropdown whenever the location/route changes
    useEffect(() => {
        setShowBrands(false)
    }, [location.pathname])

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowBrands(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef])

    useEffect(() => {
        getAllBrands()
        window.addEventListener('scroll', changeBackground)
        return () => window.removeEventListener('scroll', changeBackground)
    },[])

    return(
        <header className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${scrollNavbar ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" : "bg-white py-6 laptop:py-8"}`}>
            <div className="w-full max-w-7xl mx-auto px-4 laptop:px-8 flex flex-col items-center gap-4 laptop:gap-6">
                
                {/* Logo Area */}
                <Link to="/" className="flex items-center justify-center">
                    <img 
                        src={crasherLogoBlack} 
                        alt="Crasher Menu Logo" 
                        className={`transition-all duration-500 ease-in-out object-contain ${scrollNavbar ? "w-[180px] laptop:w-[220px]" : "w-[280px] laptop:w-[450px]"}`} 
                    />
                </Link>

                {/* Navigation Menu */}
                <nav className="w-full">
                    <ul className="w-full flex items-center justify-center gap-6 laptop:gap-12 text-xs laptop:text-sm font-bold tracking-[0.15em] text-gray-900 uppercase">
                        <li>
                            <Link to={"/"} className={`transition-colors duration-200 ${location.pathname === "/" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>HOME</Link>
                        </li>
                        <li>
                            <Link to={"/shop"} className={`transition-colors duration-200 ${location.pathname.includes("/shop") ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>SHOP</Link>
                        </li>
                        
                        {/* Dropdown Brands */}
                        <li className="relative group cursor-pointer" ref={dropdownRef}>
                            <button 
                                onClick={(e) => { e.preventDefault(); setShowBrands(!showBrands); }} 
                                className={`flex items-center gap-1.5 transition-colors duration-200 uppercase font-bold tracking-[0.15em] outline-none ${showBrands || location.pathname.includes("/brands") ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
                            >
                                BRANDS
                                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${showBrands ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            
                            {/* Dropdown Panel */}
                            <div className={`absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 shadow-2xl py-3 z-50 transition-all duration-300 origin-top rounded-none ${showBrands ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"}`}>
                                <div className="flex flex-col w-full">
                                    {
                                        brands.length !== 0 ? brands.map((item, index) => 
                                            <Link 
                                                key={index} 
                                                to={`/brands/${item.name}/${item.id}`} 
                                                className="px-6 py-3 text-[11px] font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-50 uppercase text-center tracking-widest transition-colors w-full"
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                        : null
                                    }
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link to={"/about-us"} className={`transition-colors duration-200 ${location.pathname.includes("/about-us") ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}>ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;