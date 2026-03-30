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
                <div className="text-left w-full flex gap-2 items-center mt-1">
                    <span className="text-[12px] font-medium text-gray-900">{handleChangeRupiah(hargaSetelahDiskon)}</span>
                    <del className="text-gray-400 text-[11px]">{handleChangeRupiah(hargaAwal)}</del>
                </div>
            )
        } else {
            return (
                <div className="text-left w-full mt-1">
                    <span className="text-[12px] font-medium text-gray-500">{handleChangeRupiah(price)}</span>
                </div>
            )
        }
    } 

    return(
    <Link to={`/detail-product/${nameItem}/${id}`} className="group relative flex w-full flex-col bg-transparent transition-all duration-300 mb-6">  
        <div className="relative overflow-hidden aspect-[4/5] bg-[#f9f9f9] flex items-center justify-center">
            {diskon && (
                <div className="absolute top-0 left-0 z-20 bg-red-600 px-2 py-1 text-[10px] font-bold text-white tracking-widest uppercase">
                    {jumlah_diskon}% OFF
                </div>
            )}
            <img className="absolute inset-0 h-full w-full object-cover mix-blend-multiply transition-opacity duration-700 ease-in-out group-hover:opacity-0" src={img} alt="product image" />
            <img className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" src={img2} alt="product internal view" />
        </div>
        <div className="flex flex-col items-start pt-3 bg-transparent text-left">
            <h5 className="text-[11px] laptop:text-[13px] font-bold tracking-[0.1em] text-gray-900 uppercase line-clamp-1">{nameItem}</h5>       
            {
                handleDiskon()
            }
        </div>
    </Link>
    )
}

export default CardItem; 