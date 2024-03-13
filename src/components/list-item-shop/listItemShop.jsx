import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"

function ListItemShop({items, loading}) {
    return(
        <div className="flex flex-col items-center justify-center laptop:mx-[90px] mb-[100px] overflow-hidden">
        {
            loading ?
            <LoadingSpinner />
            :
            items.length !== 0 ?
            <div className=" grid grid-cols-2 laptop:grid-cols-3">
            {
                items.map((item, index) =>
                    <CardItem 
                        id={item.id}
                        key={index} 
                        img={item.gambar1.path} 
                        img2={item.gambar2.path} 
                        nameItem={item.name} 
                        price={item.harga}
                        diskon={item.sale == 1 ? true : false }
                        jumlah_diskon={item.jumlah_sale} 
                    />
                )
            }
            </div>
            :
            <span>Item Tidak Ditemukan</span>
        }
            <div>pagination</div>
        </div>
    )
}

export default ListItemShop