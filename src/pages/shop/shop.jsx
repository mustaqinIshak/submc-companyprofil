import { useEffect, useState } from "react";
import {getProductByCategories} from "../../api/product"
import SelectCategory from "../../components/form-component/selectCategory";
import SelectSubCategory from "../../components/form-component/selectSubCategory";
import ListItemShop from "../../components/list-item-shop/listItemShop";


function Shop() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState({id: 0, label: "All"})
    const [subCategory, setSubCategory] = useState({id: 0, label: "All"})

    const handleGetProduct = async () => {
        setLoading(true)
        let payload = {
            idCategorie: category.id
        }
        if(subCategory.id !== 0) {
            payload["idSubCategorie"] = subCategory.id
        }
        const result = await getProductByCategories(payload, page)
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
    },[category, subCategory])

    useEffect(() => {
        handleGetProduct()
    },[page])
    return(
        <div className="flex flex-col items-center">
            {/* category selection */}
            <div className="">
                <form className="w-full flex flex-col laptop:flex-row">
                    <SelectCategory title={"Category"}  value={category} setValue={setCategory}   />
                    {
                        category.id !== 0 &&
                        <SelectSubCategory title={"Sub Category"}  value={subCategory} setValue={setSubCategory} category={category}   />
                    }
                </form>
            </div>
      
            <ListItemShop items={products} loading={loading} setPage={setPage} />
        </div>
    )
}

export default Shop;