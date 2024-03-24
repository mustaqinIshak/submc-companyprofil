import { useEffect } from "react";
import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"

function ListItemShop({items, loading, setPage}) {
    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        if(items.length >= 9) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    return(
        <div className="flex flex-col items-center justify-center laptop:mx-[90px] mb-[100px] overflow-hidden">
        {
            loading ? 
            <div className="w-full h-screen">
                <LoadingSpinner />
            </div>
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
            <div className="h-screen w-full flex items-center">
                <span>Item Not Found</span>
            </div>
        }   
        </div>
    )
}

export default ListItemShop