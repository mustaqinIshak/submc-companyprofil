import { useState } from "react";
import Select from "../../components/form-component/select";
import ListItemShop from "../../components/list-item-shop/listItemShop";
import ListNewItem from "../../components/listNewItem/listNewItem";


const categoryItem = [
    "T-shirt", 
    "Long-Shirt", 
    "Outwear", 
    "Short Pants", 
    "Long Pants", 
    "Shocks",
    "Wallet",
    "Cap",
    "Jewerly",
    "Shoes" 
]
function Shop() {
    const [category, setCategory] = useState("All")
    return(
        <div className="flex flex-col items-center">
            {/* category selection */}
            <div className="">
                <form className="w-full flex flex-col laptop:flex-row">
                    <Select title={"Category"} items={categoryItem} value={category} setValue={setCategory}   />
                    <Select title={"Sub Category"} items={categoryItem} value={category} setValue={setCategory}   />
                </form>
            </div>
      
            <ListItemShop />
        </div>
    )
}

export default Shop;