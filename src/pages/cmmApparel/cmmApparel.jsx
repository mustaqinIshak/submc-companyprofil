import { useEffect, useState } from "react";
import {getCmmApparelProducts} from "../../api/product"
import ListItemShop from "../../components/list-item-shop/listItemShop";


function CmmApparel() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)


    const handleGetProduct = async () => {
        setLoading(true)
  
        const result = await getCmmApparelProducts(page)
        console.log(result)
        if(result.data && page === 1) {
            setProducts([...result.data])
        }
        else if(result.data) {
            setProducts(prevData => [...prevData, ...result.data])
        } else {
            setPage(prevPage => prevPage)
        }
        setLoading(false)
    }
    useEffect(() => {
        setPage(1)
        handleGetProduct()
    },[])

    return(
        <div className="flex flex-col items-center">
            <ListItemShop items={products} loading={loading} setPage={setPage} />
        </div>
    )
}

export default CmmApparel;