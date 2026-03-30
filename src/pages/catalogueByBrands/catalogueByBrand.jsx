import { useEffect, useState } from "react";
import {getProductByBrand} from "../../api/product"
import ListItemShop from "../../components/list-item-shop/listItemShop";
import { useParams } from "react-router-dom";


function CatalogueByBrand() {
    let { id, name } = useParams();
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)


    const handleGetProduct = async (currentPage, currentId) => {
        setLoading(true)
  
        const result = await getProductByBrand(currentId, currentPage)
        if(result.data && currentPage === 1) {
            setProducts([...result.data])
        }
        else if(result.data) {
            setProducts(prevData => [...prevData, ...result.data])
        } else {
            setPage(prevPage => prevPage)
        }
        setLoading(false)
    }

    // Effect for brand change
    useEffect(() => {
        setProducts([])
        setPage(1)
        handleGetProduct(1, id)
    },[id])

    // Effect for pagination
    useEffect(() => {
        if (page > 1) {
            handleGetProduct(page, id)
        }
    }, [page])

    return(
        <div className="flex flex-col items-center min-h-screen bg-gray-50 pt-8">
            <div className="w-full bg-white shadow-sm border-b border-gray-200 py-6 mb-4">
                <div className="max-w-7xl mx-auto px-4 laptop:px-8 flex flex-col gap-2">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight uppercase">{name ? name.replaceAll("-", " ") : "BRAND CATALOGUE"}</h1>
                    <p className="text-gray-500 text-sm font-medium">Explore the latest collection from this brand</p>
                </div>
            </div>
            <ListItemShop items={products} loading={loading} setPage={setPage} />
        </div>
    )
}

export default CatalogueByBrand;