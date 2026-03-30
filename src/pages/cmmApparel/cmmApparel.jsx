import { useEffect, useState } from "react";
import {getCmmApparelProducts} from "../../api/product"
import ListItemShop from "../../components/list-item-shop/listItemShop";


function CmmApparel() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)


    const handleGetProduct = async (currentPage) => {
        setLoading(true)
  
        const result = await getCmmApparelProducts(currentPage)
        if(result.data && currentPage === 1) {
            setProducts([...result.data])
        }
        else if(result.data) {
            setProducts(prevData => [...prevData, ...result.data])
        }
        setLoading(false)
    }

    useEffect(() => {
        setProducts([])
        setPage(1)
        handleGetProduct(1)
    },[])

    useEffect(() => {
        if (page > 1) {
            handleGetProduct(page)
        }
    }, [page])

    return(
        <div className="flex flex-col items-center min-h-screen bg-white pt-2">
            <div className="w-full pb-8 pt-4">
                <div className="max-w-7xl mx-auto px-4 laptop:px-8 flex flex-col gap-2 items-center text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-widest uppercase">CMM APPAREL</h1>
                    <p className="text-gray-500 text-sm font-medium tracking-wide">Explore the latest collection</p>
                </div>
            </div>
            <ListItemShop items={products} loading={loading} setPage={setPage} />
        </div>
    )
}

export default CmmApparel;