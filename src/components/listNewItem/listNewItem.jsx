import CardItem from "../cardItem"
import item1 from "../../assets/exampleItem/item1.jpg"
import item2 from "../../assets/exampleItem/item2.jpg"
import item3 from "../../assets/exampleItem/item3.jpg"
import item4 from "../../assets/exampleItem/item4.jpg"
import item5 from "../../assets/exampleItem/item5.jpg"
import item6 from "../../assets/exampleItem/item6.jpg"

function ListNewItem() {
    return(
        <div className="w-full grid justify-items-center ">
            <div className="flex justify-beetwen max-w-[1000px] flex-wrap">
                <CardItem img={item1} />
                <CardItem img={item2} />
                <CardItem img={item3} />
                <CardItem img={item4} />
                <CardItem img={item5} />
                <CardItem img={item6} />
            </div>
        </div>
    )
}

export default ListNewItem