import { Link } from "react-router-dom";

function CardItem ({img, img2,nameItem = "no-name", price="Rp. 0"}) {
    return(
    <Link to={'/detailProduk'} className="w-full h-auto mb-[30px] max-w-sm bg-white group">  
        <div className="relative overflow-hidden">
            <img className="w-full h-auto laptop:p-8 " src={img} alt="product image" />
            <img className="absolute h-full w-full laptop:p-8  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition ease-in-out delay-200" src={img2} alt="produk image" />
        </div>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className=" laptop:text-[12px] text-center font-semibold tracking-tight text-gray-900 dark:text-white">{nameItem}</h5>
            </a>
           
            <div className="text-center w-full">
                <span className="text-[12px] font-bold text-gray-900 dark:text-white">{price}</span>
            </div>
        </div>
    </Link>
 
    )
}

export default CardItem; 