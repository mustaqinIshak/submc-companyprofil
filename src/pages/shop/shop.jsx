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
        window.scrollTo(0, 0)
        setPage(1)
        handleGetProduct()
    },[category, subCategory])

    useEffect(() => {
        handleGetProduct()
    },[page])
    return(
        <div className="flex flex-col items-center min-h-screen bg-white pt-2">
            {/* Page Header */}
            <div className="w-full pb-8 pt-4">
                <div className="max-w-7xl mx-auto px-4 laptop:px-8 flex flex-col gap-6 items-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-widest uppercase">SHOP</h1>
                    {/* category selection */}
                    <form className="flex flex-col laptop:flex-row gap-4 items-center justify-center">
                        <SelectCategory title={"Category"}  value={category} setValue={setCategory}   />
                        {
                            category.id !== 0 &&
                            <SelectSubCategory title={"Sub Category"}  value={subCategory} setValue={setSubCategory} category={category}   />
                        }
                    </form>
                </div>
            </div>
      
            <ListItemShop items={products} loading={loading} setPage={setPage} />
        </div>
    )
}

export default Shop;