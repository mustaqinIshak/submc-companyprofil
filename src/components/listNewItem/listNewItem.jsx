import { useState, useEffect } from "react"
import { getIndex } from "../../api/newItem"
import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"
import ButtonDefault from "../buttons/buttonDefault"
import { Link } from "react-router-dom"

function ListNewItem() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const getNewItem = async () => {
        setLoading(true)
        try {
            const result = await getIndex()
            console.log('ini hasil result', result)
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
        <div className="flex flex-col items-center justify-center mt-12 laptop:mx-[90px] mb-[100px]">
            {
                loading ?
                <LoadingSpinner />
                :
                items.length !== 0 ?
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[24px] font-semibold">NEW ARRIVALS</h1>
                    {/* <div className="flex tablet:justify-beetwen max-w-[1000px] flex-wrap"> */}
                    <div className=" grid grid-cols-2 laptop:grid-cols-3">
                    {
                            items.map((item, index) =>
                                <CardItem 
                                    id={item.id}
                                    key={index} 
                                    img={item.gambar1.path} 
                                    img2={item.gambar2.path} 
                                    nameItem={item.name} 
                                    price={item.harga}
                                    diskon={item.sale == 1 ? true : false }
                                    jumlah_diskon={item.jumlah_sale} 
                                />
                            )
                        }
                    </div>
                    <div>
                        <Link to={"/shop"}>
                            <ButtonDefault name={"All New Item"} />
                        </Link>
                    </div>
                </div>
                :
                <span>Item Tidak Ditemukan</span>
            }
        </div>
    )
}

export default ListNewItem