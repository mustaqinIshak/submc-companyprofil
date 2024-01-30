import { useState } from "react";
import { Link } from "react-router-dom";
import cmmLogoBlack from "../assets/logo/logoblack.png"

function Header() {
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
  <header className={` ${scrollNavbar ? "pt-[30px]" : "pt-[60px]"} pb-[10px] w-full h-auto text-center flex justify-center`}>        
      <span><img src={cmmLogoBlack} className="w-[150px]" /></span>
    </header>
  )
}

export default Header;