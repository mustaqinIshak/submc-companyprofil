import { useEffect, useState } from "react"
import { redirect } from "react-router-dom";
import ButtonShoope from "../../components/buttons/buttonShoope";
import ButtonWhatsapp from "../../components/buttons/buttonWhatsapp";
import handleChangeRupiah from "../../helpers/handleChangRupiah"
import { getSelectedProduct } from "../../api/product";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import LoadingSpinner from "../../components/loadingSpinner";
import ImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "./detailItem.css"
function DetailItem() {
    let { id } = useParams();
    const location = useLocation();
    const [loading, setLoading] = useState (false)
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
        setLoading(true)
        const payload = {
            id: id,
        }
       const result = await getSelectedProduct(payload) 
       result ? setSelectedProduct({...result}) : redirect('/404')
       setLoading(false)
    }

    const handlePicSelected = (index) => {
        setIndexDefault(index)
    }

    useEffect(() => {
        handleProductSelected()
    },[])

    return(
        <>
            {
                loading ? 
                <div className="w-full h-screen flex items-center">
                    <LoadingSpinner />
                </div>
                :
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
                            <div className="pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3]" dangerouslySetInnerHTML={{ __html: selectedProduct.deskripsi }} />
                            {/* sizes */}
                            <div className="pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3] flex flex-col gap-6">
                                <span className="text-[12px] leading-[15px] laptop:leading-[18px] laptop:text-[15px]">Size : </span>
                                <ul className="flex flex-row gap-10">
                                    {
                                        selectedProduct.sizes ? 
                                        selectedProduct.sizes.map((item, index) => 
                                            
                                                item.jumlah !== "0" &&
                                                <li key={index}><span>{item.name}</span></li>
                                            
                                        )
                                        :
                                        <li>All Size</li>
                                    }
                                </ul>
                            </div>
                            {/* button */}
                            <div className="flex flex-col gap-4 pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3]">
                                <ButtonShoope name={selectedProduct.name} linkUrl={selectedProduct["link_shoope"]} />
                                <ButtonWhatsapp name={selectedProduct.name} location={location} />
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default DetailItem