import { useState, useEffect } from "react"
import { getIndex } from "../../api/newItem"
import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"
import ButtonDefault from "../buttons/buttonDefault"
import { Link } from "react-router-dom"

function ListNewItem() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
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

    return(
        <div className="flex flex-col items-center justify-center mt-16 px-4 laptop:px-16 laptop:mx-auto max-w-7xl mb-24">
            <h2 className="text-3xl laptop:text-4xl font-extrabold text-gray-900 tracking-tight mb-10 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gray-900">
                NEW ARRIVALS
            </h2>
            
            {
                loading ?
                <div className="w-full grid grid-cols-2 laptop:grid-cols-3 gap-6 gap-y-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex flex-col gap-4 animate-pulse">
                            <div className="w-full aspect-[4/5] bg-gray-200 rounded-xl"></div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                items.length !== 0 ?
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="w-full grid grid-cols-2 laptop:grid-cols-3 gap-6 gap-y-10">
                    {
                            items.map((item, index) => {
                                if(item.gambar1?.path && item.gambar2?.path) {
                                    return <CardItem 
                                        id={item.id}
                                        key={index} 
                                        img={item.gambar1.path} 
                                        img2={item.gambar2.path} 
                                        nameItem={item.name} 
                                        price={item.harga}
                                        diskon={item.sale == 1 ? true : false }
                                        jumlah_diskon={item.jumlah_sale} 
                                    />
                                }
                                return null;
                            })
                        }
                    </div>
                    <div className="mt-12">
                        <Link to={"/shop"}>
                            <button className="px-8 py-3.5 bg-gray-900 text-white font-medium text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
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