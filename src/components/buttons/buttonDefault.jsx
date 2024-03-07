function ButtonDefault ({name}) {
    return(
        <span type="button" 
            className="
                text-white 
                bg-black
                hover:bg-gray-900 
                focus:outline-none 
                focus:ring-4 
                focus:ring-gray-300 
                font-medium 
                text-sm 
                px-[40px] 
                py-[25px] 
                me-2 
                mb-2 
            "
        >
            {name}
        </span>
    )
}

export default ButtonDefault;