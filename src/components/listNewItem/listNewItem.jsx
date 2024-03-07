import { useState, useEffect } from "react"
import { getIndex } from "../../api/newItem"
import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"
import ButtonDefault from "../buttons/buttonDefault"

function ListNewItem() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const getNewItem = async () => {
        setLoading(true)
        try {
            const result = await getIndex()
            if(result.data) {
                setItems([...result])
            }
        } catch (error) {
            
        }
        setLoading(false)
    }

    useEffect(() => {
        getNewItem()
    },[])
    return(
        <div className="flex flex-col items-center justify-center laptop:mx-[90px] mb-[100px]">
            {
                loading ?
                <LoadingSpinner />
                :
                items.length !== 0 ?
                <div>
                    <h1 className="text-[24px] font-semibold">NEW ARRIVALS</h1>
                    {/* <div className="flex tablet:justify-beetwen max-w-[1000px] flex-wrap"> */}
                    <div className=" grid grid-cols-2 laptop:grid-cols-3">
                        {
                            items.map((item, index) =>
                                <CardItem key={index} img={item.gambar1.path} img2={item.gambar2.path} />
                            )
                        }
                    </div>
                    <div>
                        <ButtonDefault name={"All New Item"} />
                    </div>
                </div>
                :
                <span>Item Tidak Ditemukan</span>
            }
        </div>
    )
}

export default ListNewItem