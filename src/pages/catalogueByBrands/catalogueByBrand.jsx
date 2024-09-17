import { useEffect, useState } from "react";
import {getProductByBrand} from "../../api/product"
import ListItemShop from "../../components/list-item-shop/listItemShop";
import { useParams } from "react-router-dom";


function CatalogueByBrand() {
    let { id } = useParams();
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)


    const handleGetProduct = async () => {
        setLoading(true)
  
        const result = await getProductByBrand(id, page)
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
    },[id])

    return(
        <div className="flex flex-col items-center">
            <ListItemShop items={products} loading={loading} setPage={setPage} />
        </div>
    )
}

export default CatalogueByBrand;