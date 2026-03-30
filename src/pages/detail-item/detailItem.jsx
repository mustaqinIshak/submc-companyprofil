import { useEffect, useState } from "react"
import { redirect } from "react-router-dom";
import ButtonShoope from "../../components/buttons/buttonShoope";
import ButtonWhatsapp from "../../components/buttons/buttonWhatsapp";
import handleChangeRupiah from "../../helpers/handleChangRupiah"
import { getSelectedProduct } from "../../api/product";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import LoadingSpinner from "../../components/loadingSpinner";
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
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <del className="text-gray-400 text-sm font-medium">{handleChangeRupiah(hargaAwal)}</del>
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">-{persenDiskon}%</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{handleChangeRupiah(hargaSetelahDiskon)}</span>
                </div>
            )
        } else {
            return (
                <div className="pt-1">
                    <span className="text-2xl font-bold text-gray-900">{handleChangeRupiah(harga)}</span>
                </div>
            )
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
        <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-6 laptop:pt-12 fade-in">
            {
                loading ? 
                <div className="w-full max-w-7xl px-4 flex flex-col laptop:flex-row gap-8 animate-pulse">
                    {/* Skeleton Image Area */}
                    <div className="w-full laptop:w-1/2 flex flex-col items-center gap-4">
                        <div className="w-full aspect-square bg-gray-300 rounded-lg"></div>
                        <div className="w-full flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-16 h-16 bg-gray-300 rounded-md"></div>
                            ))}
                        </div>
                    </div>
                    {/* Skeleton Details Area */}
                    <div className="w-full laptop:w-1/2 flex flex-col gap-6 pt-4">
                        <div className="w-3/4 h-8 bg-gray-300 rounded-md"></div>
                        <div className="w-1/4 h-6 bg-gray-300 rounded-md"></div>
                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
                        <div className="flex flex-col gap-2">
                            <div className="w-full h-4 bg-gray-300 rounded-md"></div>
                            <div className="w-5/6 h-4 bg-gray-300 rounded-md"></div>
                            <div className="w-4/6 h-4 bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
                        <div className="w-1/5 h-4 bg-gray-300 rounded-md"></div>
                        <div className="flex gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 bg-gray-300 rounded-md"></div>
                            ))}
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
                        <div className="w-full h-12 bg-gray-300 rounded-lg opacity-80"></div>
                        <div className="w-full h-12 bg-gray-300 rounded-lg opacity-80"></div>
                    </div>
                </div>
                :
                <section className="w-full max-w-7xl px-4 flex flex-col laptop:flex-row gap-8 transition-opacity duration-500 ease-in-out">
                    {/* list-item-pic */}
                    { selectedProduct.gambar ? 
                        <div className="w-full laptop:w-[55%] flex flex-col items-center gap-4 laptop:gap-6">
                            {/* Main Image Container */}
                            <div className="relative w-full aspect-square laptop:aspect-auto laptop:max-h-[700px] overflow-hidden rounded-none laptop:rounded-xl bg-white laptop:border laptop:border-gray-100 laptop:p-2 group">
                                <img
                                    className="w-full h-full object-cover laptop:object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    alt={selectedProduct.name}
                                    src={selectedProduct.gambar[indexDefault].path}
                                />
                                
                                {/* Mobile Modern Navigation Arrows */}
                                <div className="absolute inset-0 flex items-center justify-between p-4 laptop:hidden pointer-events-none">
                                    <button 
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); handlePicSelected((indexDefault - 1 + selectedProduct.gambar.length) % selectedProduct.gambar.length) }}
                                        className="!w-10 !h-10 !p-0 flex items-center justify-center rounded-full bg-white shadow-md text-gray-900 pointer-events-auto active:scale-95 transition-transform"
                                        aria-label="Previous image"
                                    >
                                        <span className="text-lg font-bold font-mono pr-0.5">&lt;</span>
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); handlePicSelected((indexDefault + 1) % selectedProduct.gambar.length) }}
                                        className="!w-10 !h-10 !p-0 flex items-center justify-center rounded-full bg-white shadow-md text-gray-900 pointer-events-auto active:scale-95 transition-transform"
                                        aria-label="Next image"
                                    >
                                        <span className="text-lg font-bold font-mono pl-0.5">&gt;</span>
                                    </button>
                                </div>

                                {/* Modern Image Counter Pill (Mobile) */}
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full laptop:hidden">
                                    {indexDefault + 1} / {selectedProduct.gambar.length}
                                </div>
                            </div>

                            {/* Thumbnails - Hidden on mobile, shown on laptop/desktop */}
                            <div className="thumbnail-container w-full justify-center pt-6 pb-2">
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 90px))', gap: '1rem', width: '100%', justifyContent: 'center' }}>
                                    {[...selectedProduct.gambar].map((img, i) => (
                                        <button 
                                            key={i} 
                                            onClick={() => handlePicSelected(i)} 
                                            className={`relative aspect-square overflow-hidden rounded-xl bg-white transition-all duration-300 ease-out ${
                                                indexDefault === i 
                                                    ? 'ring-2 ring-gray-900 ring-offset-2 scale-105 shadow-sm z-10' 
                                                    : 'border border-gray-200 opacity-70 hover:opacity-100 hover:scale-105'
                                            }`}
                                        >
                                            <img alt={`thumbnail ${i}`} src={img.path} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Modern Dots Indicator (Mobile only) */}
                            <div className="flex justify-center gap-1.5 laptop:hidden py-2">
                                {[...selectedProduct.gambar].map((_, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => handlePicSelected(i)} 
                                        className={`transition-all duration-300 rounded-full ${indexDefault === i ? 'w-2 h-2 bg-gray-800' : 'w-2 h-2 bg-gray-300'}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        :
                        null 
                    } 

                    {/* ditail-item */}
                    <div className="w-full laptop:w-[45%] pb-16 laptop:sticky laptop:top-8 self-start">
                        {/* information */}
                        <div className="bg-white p-6 laptop:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
                            {/* title */}
                            <div className="flex flex-col gap-3">
                                <h1 className="title-produk text-2xl laptop:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                                    {selectedProduct.name}
                                </h1>
                                <div className="text-xl font-medium text-gray-800">
                                    {handleDiskon(selectedProduct.sale ,selectedProduct.jumlah_sale, selectedProduct.harga)}
                                </div>
                            </div>
                            {/* description */}
                            <div className="pt-6 border-t border-gray-100 text-gray-600 leading-relaxed prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2" dangerouslySetInnerHTML={{ __html: selectedProduct.deskripsi }} />
                            
                            {/* sizes */}
                            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                                <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">AVAILABLE SIZES</span>
                                <div className="flex flex-wrap gap-3">
                                    {
                                        selectedProduct.sizes ? 
                                        selectedProduct.sizes.map((item, index) => 
                                            item.jumlah !== "0" && (
                                                <div key={index} className="px-5 py-2.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:border-gray-800 hover:text-gray-900 cursor-pointer transition-colors duration-200">
                                                    {item.name}
                                                </div>
                                            )
                                        )
                                        :
                                        <div className="px-5 py-2.5 rounded-md border border-gray-800 bg-gray-50 text-sm font-medium text-gray-900">All Size</div>
                                    }
                                </div>
                            </div>

                            {/* action buttons */}
                            <div className="flex flex-col gap-3 pt-6 mt-2 border-t border-gray-100">
                                <ButtonShoope name={selectedProduct.name} linkUrl={selectedProduct["link_shoope"]} />
                                <ButtonWhatsapp name={selectedProduct.name} location={location} />
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default DetailItem