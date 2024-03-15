function ButtonWhatsapp ({name, location}) {
    console.log(location)
    return(
        <a href={`https://wa.me/+6282194593969/?text=https://submc-companyprofil.vercel.app${location.pathname}`} target="blank">
            <span type="button" 
                className="
                    text-center
                    text-black 
                    bg-white
                    border 
                    border-black
                    focus:outline-none 
                    focus:ring-4 
                    focus:ring-gray-300 
                    font-medium 
                    text-[11px]
                    px-[20px] 
                    py-[15px]
                    w-[240px]
                    max-w-[240px]
                    me-2 
                    mb-2 
                "
            >
                Buy "{name}" on whatsapp
            </span>
        </a>
    )
}

export default ButtonWhatsapp;