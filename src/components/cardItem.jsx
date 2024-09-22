import { Link } from "react-router-dom";
import handleChangeRupiah from "../helpers/handleChangRupiah";
import './cardItem.css'

function CardItem ({id, img, img2,nameItem = "no-name", price="Rp. 0", diskon=false, jumlah_diskon=0}) {

    const handleDiskon = () => {
        if(diskon) {
            let hargaAwal = parseInt(price)
            let persenDiskon = parseInt(jumlah_diskon)
            let diskonAmount = (persenDiskon / 100) * hargaAwal;
            let hargaSetelahDiskon = hargaAwal - diskonAmount;
            return(
                <div className="text-center w-full flex flex-col">
                    <del className="text-red-700 text-[12px] ">{handleChangeRupiah(hargaAwal)}</del>
                    <span className="text-[17px] font-bold text-gray-900 dark:text-white">{handleChangeRupiah(hargaSetelahDiskon)}</span>
                </div>
            )
        } else {
            <div className="text-center w-full">
                <span className="text-[12px] font-bold text-gray-900 dark:text-white">{handleChangeRupiah(price)}</span>
            </div>
        }
    } 

    return(
    <Link to={`/detail-product/${nameItem}/${id}`} className="linkstyle w-full h-auto mb-[30px] max-w-sm bg-white group ">  
        <div className="relative overflow-hidden">
            <img className="w-full h-auto laptop:p-8 " src={img} alt="product image" />
            <img className="absolute h-full w-full laptop:p-8 group-hover:no-underline group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500" src={img2} alt="produk image" />
        </div>
        <div className="px-5 pb-5 ">
            <h5 className="laptop:text-[12px] text-center font-semibold tracking-tight text-gray-900 dark:text-white">{nameItem}</h5>       
            {
                handleDiskon()
            }
        </div>
    </Link>
 
    )
}

export default CardItem; 