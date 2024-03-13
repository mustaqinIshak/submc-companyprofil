import { useEffect, useState } from "react"
import { redirect } from "react-router-dom";
import ButtonDefault from "../../components/buttons/buttonDefault"
import handleChangeRupiah from "../../helpers/handleChangRupiah"
import { getSelectedProduct } from "../../api/product";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "./detailItem.css"
function DetailItem() {
    let { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({})
    const [indexDefault, setIndexDefault] = useState(0)

    const handleDiskon = (diskon, jumlah_diskon, harga) => {
        if(diskon) {
            let hargaAwal = parseInt(harga)
            let persenDiskon = parseInt(jumlah_diskon)
            let diskonAmount = (persenDiskon / 100) * hargaAwal;
            let hargaSetelahDiskon = hargaAwal - diskonAmount;
            return(
                <div className="flex flex-col">
                    <del className="text-red-700 text-[12px]">{handleChangeRupiah(hargaAwal)}</del>
                    <span className="">{handleChangeRupiah(hargaSetelahDiskon)}</span>
                </div>
            )
        } else {
            <div className="">
                <span className="">{handleChangeRupiah(harga)}</span>
            </div>
        }
    } 

    const handleProductSelected = async () => {
        const payload = {
            id: id,
        }
       const result = await getSelectedProduct(payload) 
       return result ? setSelectedProduct({...result}) : redirect('/404')
    }

    const handlePicSelected = (index) => {
        setIndexDefault(index)
    }

    useEffect(() => {
        handleProductSelected()
    },[])

    return(
        <section className="flex flex-col laptop:flex-row">
            {/* list-item-pic */}
            
            { selectedProduct.gambar ? 
                <div className="w-full flex flex-col items-center laptop:w-1/2 px-[3%]">
                    <img
                    alt=""
                    src={selectedProduct.gambar[indexDefault].path}
                    />
                    <div className={`${selectedProduct.gambar ? "p-4 my-6 w-full flex justify-center" : "hidden"}`}>
                        <ol className="flex justify-center flex-row w-[80%] laptop:w-1/3">
                            {[...selectedProduct.gambar].map((img, i) => (
                                <li  key={i} className="block p-1 h-full w-[calc((100% - 20px)/5)] ">
                                    <img onClick={() => handlePicSelected(i)} alt="upload preview" src={img.path} className="img-preview w-full h-full sticky object-cover bg-fixed" />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                :
                null 
            } 

            {/* ditail-item */}
            <div className="pt-[20px] pb-[66px] px-[26px] laptop:pt-[80px] laptop:pb-[80px] laptop:px-[120px] w-full laptop:w-1/2">
                {/* information */}
                <div className="">
                    {/* title */}
                    <div className="mb-[60px] font-[600] title-produk text-[15px] leading-[17px] laptop:leading-[20px] laptop:text-[18px]  ">
                        <h1 className="text-[15px] leading-[17px] laptop:leading-[20px] laptop:text-[18px]">{selectedProduct.name}</h1>
                        {handleDiskon(selectedProduct.sale ,selectedProduct.jumlah_sale, selectedProduct.harga)}
                    </div>
                    {/* description */}
                    <div className="pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3]">
                        <p>
                            {/* Description:  */}
                            {selectedProduct.deskripsi}
                        </p>
                    </div>
                    {/* button */}
                    <div className="pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3]">
                        <ButtonDefault name={"Buy"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailItem