import CardItem from "../cardItem"
import item1 from "../../assets/exampleItem/item1.jpg"
import item2 from "../../assets/exampleItem/item2.jpg"
import item3 from "../../assets/exampleItem/item3.jpg"
import item4 from "../../assets/exampleItem/item4.jpg"
import item5 from "../../assets/exampleItem/item5.jpg"
import item6 from "../../assets/exampleItem/item6.jpg"

function ListNewItem() {
    return(
        <div className="flex flex-col items-center justify-center laptop:mx-[90px] mb-[100px]">
            <h1 className="text-[24px] font-semibold">NEW ARRIVALS</h1>
            {/* <div className="flex tablet:justify-beetwen max-w-[1000px] flex-wrap"> */}
            <div className=" grid grid-cols-2 laptop:grid-cols-3">
                <CardItem img={item1} />
                <CardItem img={item2} />
                <CardItem img={item3} />
                <CardItem img={item4} />
                <CardItem img={item5} />
                <CardItem img={item6} />
            </div>
            <div>
                <span type="button" 
                    className="
                        text-white 
                        bg-black
                        hover:bg-gray-900 
                        focus:outline-none 
                        focus:ring-4 
                        focus:ring-gray-300 
                        font-medium 
                        text-sm 
                        px-[40px] 
                        py-[25px] 
                        me-2 
                        mb-2 
                    "
                >
                    ALL NEW ITEM
                </span>
            </div>
        </div>
    )
}

export default ListNewItem