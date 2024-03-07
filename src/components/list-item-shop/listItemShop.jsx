import item1 from "../../assets/exampleItem/item1.jpg"
import item2 from "../../assets/exampleItem/item2.jpg"
import item3 from "../../assets/exampleItem/item3.jpg"
import item4 from "../../assets/exampleItem/item4.jpg"
import item5 from "../../assets/exampleItem/item5.jpg"
import item6 from "../../assets/exampleItem/item6.jpg"
import CardItem from "../cardItem"

function ListItemShop({category, subCategory}) {
    return(
        <div className="flex flex-col items-center justify-center laptop:mx-[90px] mb-[100px] overflow-hidden">
            <div className=" grid grid-cols-2 laptop:grid-cols-3">
                <CardItem img={item1} />
                <CardItem img={item2} />
                <CardItem img={item3} />
                <CardItem img={item4} />
                <CardItem img={item5} />
                <CardItem img={item6} />
            </div>
            <div>pagination</div>
        </div>
    )
}

export default ListItemShop