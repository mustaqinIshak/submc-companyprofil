import { useState, useEffect, useRef } from "react"
import { getIndex } from "../../api/newItem"
import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"
import ButtonDefault from "../buttons/buttonDefault"
import { Link } from "react-router-dom"

function ListNewItem() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const scrollContainerRef = useRef(null)
    
    const getNewItem = async () => {
        setLoading(true)
        try {
            const result = await getIndex()
            if(result) {
                setItems([...result])
            }
        } catch (error) {
            console.log("gagal mengambil data")
        }
        setLoading(false)
    }

    useEffect(() => {
        getNewItem()
    },[])

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return(
        <div className="flex flex-col items-center justify-center mt-20 mb-24 w-full px-6 tablet:px-12 laptop:px-24 xl:px-36">
            
            {
                loading ?
                <div className="w-full flex overflow-hidden gap-6 px-4 laptop:px-12">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex-none w-[75vw] md:w-[40vw] laptop:w-[22vw] flex flex-col gap-4 animate-pulse">
                            <div className="w-full aspect-[4/5] bg-gray-200"></div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                items.length !== 0 ?
                <div className="flex flex-col items-center justify-center w-full relative">
                    {/* Navigation Buttons - Always visible on larger screens */}
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute -left-6 tablet:-left-10 laptop:-left-16 top-[35%] -translate-y-1/2 z-50 p-2 flex items-center justify-center text-black transition-transform hover:scale-110 cursor-pointer bg-transparent border-none outline-none"
                    >
                        <svg className="w-8 h-8 laptop:w-10 laptop:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    
                    <button 
                        onClick={() => scroll('right')}
                        className="absolute -right-6 tablet:-right-10 laptop:-right-16 top-[35%] -translate-y-1/2 z-50 p-2 flex items-center justify-center text-black transition-transform hover:scale-110 cursor-pointer bg-transparent border-none outline-none"
                    >
                        <svg className="w-8 h-8 laptop:w-10 laptop:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>

                    <div 
                        ref={scrollContainerRef}
                        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 laptop:gap-6 px-2 pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{__html: `
                            div::-webkit-scrollbar { display: none; }
                        `}} />
                        {
                            items.map((item, index) => {
                                if(item.gambar1?.path && item.gambar2?.path) {
                                    return (
                                        <div key={index} className="flex-none w-[70vw] md:w-[35vw] laptop:w-[22vw] xl:w-[20vw] snap-start">
                                            <CardItem 
                                                id={item.id}
                                                img={item.gambar1.path} 
                                                img2={item.gambar2.path} 
                                                nameItem={item.name} 
                                                price={item.harga}
                                                diskon={item.sale == 1 ? true : false }
                                                jumlah_diskon={item.jumlah_sale} 
                                            />
                                        </div>
                                    )
                                }
                                return null;
                            })
                        }
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Link to={"/shop"}>
                            <button className="px-10 py-3 border border-gray-300 text-gray-900 font-bold text-[11px] tracking-widest uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 bg-transparent">
                                All New Items
                            </button>
                        </Link>
                    </div>
                </div>
                :
                <div className="py-20 text-gray-500 font-medium text-lg">No items found</div>
            }
        </div>
    )
}

export default ListNewItem