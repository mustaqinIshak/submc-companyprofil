function CardItem ({img, nameItem = "no-name", price="Rp. 0"}) {
    return(
    <div className="w-full h-auto mb-[30px] max-w-sm bg-white ">
        
        <img className="w-full h-auto laptop:p-8 hover:opacity-8" src={img} alt="product image" />
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className=" laptop:text-[12px] text-center font-semibold tracking-tight text-gray-900 dark:text-white">{nameItem}</h5>
            </a>
           
            <div className="text-center w-full">
                <span className="text-[12px] font-bold text-gray-900 dark:text-white">{price}</span>
            </div>
        </div>
    </div>
    )
}

export default CardItem; 