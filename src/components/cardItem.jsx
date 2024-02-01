function CardItem ({img, nameItem = "no-name", price="Rp. 0"}) {
    return(
    <div className="w-[33.33%] mb-[30px] max-w-sm bg-white ">
        <a href="#">
            <img className="p-8 hover:opacity-8" src={img} alt="product image" />
        </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-[12px] text-center font-semibold tracking-tight text-gray-900 dark:text-white">{nameItem}</h5>
            </a>
           
            <div className="text-center w-full">
                <span className="text-[12px] font-bold text-gray-900 dark:text-white">{price}</span>
            </div>
        </div>
    </div>
    )
}

export default CardItem; 