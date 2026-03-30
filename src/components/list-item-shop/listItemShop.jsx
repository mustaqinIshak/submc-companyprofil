import { useEffect } from "react";
import LoadingSpinner from "../loadingSpinner"
import CardItem from "../cardItem"

function ListItemShop({items, loading, setPage}) {
    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            if(!loading) {
                setPage(prevPage => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]); // added dependency so it doesn't trigger repeatedly while already loading

    return(
        <div className="flex flex-col items-center justify-center w-full px-4 laptop:px-16 max-w-7xl mb-24 overflow-hidden pt-8">
            
            <div className="w-full grid grid-cols-2 laptop:grid-cols-3 gap-6 gap-y-10 min-h-[50vh]">
            {
                items.length !== 0 ? (
                    items.map((item, index) =>
                        <CardItem 
                            id={item.id}
                            key={index} 
                            img={item.gambar1?.path} 
                            img2={item.gambar2?.path} 
                            nameItem={item.name} 
                            price={item.harga}
                            diskon={item.sale == 1 ? true : false }
                            jumlah_diskon={item.jumlah_sale} 
                        />
                    )
                ) : !loading && (          
                    <div className="col-span-2 laptop:col-span-3 h-full flex items-center justify-center py-20 text-gray-500 font-medium text-lg">
                        Item Not Found
                    </div>
                )
            }
            {
                loading && (
                    <>
                        {[1, 2, 3].map((i) => (
                            <div key={`skeleton-${i}`} className="flex flex-col gap-4 animate-pulse">
                                <div className="w-full aspect-[4/5] bg-gray-200 rounded-xl"></div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                                </div>
                            </div>
                        ))}
                    </>
                )
            }
            </div>
        </div>
    )
}

export default ListItemShop