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
                <div className="text-center w-full flex flex-col mt-2 gap-1">
                    <del className="text-gray-400 text-xs font-medium">{handleChangeRupiah(hargaAwal)}</del>
                    <span className="text-lg font-bold text-gray-900">{handleChangeRupiah(hargaSetelahDiskon)}</span>
                </div>
            )
        } else {
            return (
                <div className="text-center w-full mt-2">
                    <span className="text-lg font-semibold text-gray-900">{handleChangeRupiah(price)}</span>
                </div>
            )
        }
    } 

    return(
    <Link to={`/detail-product/${nameItem}/${id}`} className="group relative flex w-full flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg border border-gray-100 mb-8 mx-auto max-w-sm">  
        <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 flex items-center justify-center">
            {diskon && (
                <div className="absolute top-3 left-3 z-20 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {jumlah_diskon}% OFF
                </div>
            )}
            <img className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0" src={img} alt="product image" />
            <img className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" src={img2} alt="product internal view" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="flex flex-col items-center px-4 py-5 bg-white">
            <h5 className="text-sm laptop:text-base font-semibold tracking-wide text-gray-800 uppercase line-clamp-1">{nameItem}</h5>       
            {
                handleDiskon()
            }
        </div>
    </Link>
    )
}

export default CardItem; 