import { useState } from "react";
import SelectCategory from "../../components/form-component/selectCategory";
import ListItemShop from "../../components/list-item-shop/listItemShop";
import ListNewItem from "../../components/listNewItem/listNewItem";

function Shop() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState({id: 0, label: "All"})
    const [subCategory, setSubCategory] = useState({id: 0, label: "All"})
    return(
        <div className="flex flex-col items-center">
            {/* category selection */}
            <div className="">
                <form className="w-full flex flex-col laptop:flex-row">
                    <SelectCategory title={"Category"}  value={category} setValue={setCategory}   />
                    {/* <Select title={"Sub Category"}  value={category} setValue={setCategory}   /> */}
                </form>
            </div>
      
            <ListItemShop items={products} loading={loading} />
        </div>
    )
}

export default Shop;