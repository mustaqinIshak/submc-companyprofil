
function ButtonShoope ({name, linkUrl}) {
    console.log(linkUrl)
    return(
        <a href={linkUrl} target="blank" className="">
            <span type="button" 
                className="
                    text-center
                    text-white 
                    bg-black
                    hover:bg-gray-900 
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
                Buy "{name}" on shopee
            </span>
        </a>
    )
}

export default ButtonShoope;