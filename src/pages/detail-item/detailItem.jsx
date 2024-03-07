import { useEffect, useState } from "react"
import ButtonDefault from "../../components/buttons/buttonDefault"
import item1 from "../../assets/exampleItem/item1.jpg"
import item2 from "../../assets/exampleItem/item1-2.jpg"
import item3 from "../../assets/exampleItem/item1-3.jpg"
import item4 from "../../assets/exampleItem/item1-4.jpg"
import ImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "./detailItem.css"
function DetailItem() {
    const productDetailItem = {
        images: [
          {
            original:
             item1,
          },
          {
            original:
             item2,
          },
          {
            original:
             item3,
          },
          {
            original:
             item4,
          },
        ],
        title: "BIG ITALIAN SOFA",
        reviews: "150",
        availability: true,
        brand: "apex",
        category: "Sofa",
        sku: "BE45VGTRK",
        price: 450,
        previousPrice: 599,
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
        size: ["XS", "S", "M", "L", "XL"],
        color: ["gray", "violet", "red"],
      };
    const [selectedPic, setSelectedPic] = useState({})
    const [indexDefault, setIndecDefault] = useState(0)

    const handlePicSelected = (index) => {
        const arrPic = [...productDetailItem.images]
        const obj = arrPic[index]
        console.log(obj)
        setSelectedPic(obj)
    }

    return(
        <section className="flex flex-col laptop:flex-row">
            {/* list-item-pic */}
            
            {/* { productDetailItem.images.length ?  */}
                <div className="w-full flex flex-col items-center laptop:w-1/2 px-[3%]">
                    <img
                    alt=""
                    src={selectedPic.original}
                    />
                    <div className={`${productDetailItem.images.length ? "p-4 my-6 w-full flex justify-center" : "hidden"}`}>
                        <ol className="flex justify-center flex-row w-[80%] laptop:w-1/3">
                            {[...productDetailItem.images].map((img, i) => (
                                <li  key={i} className="block p-1 h-full w-[calc((100% - 20px)/5)] ">
                                    <img onClick={() => handlePicSelected(i)} alt="upload preview" src={img.original} className="img-preview w-full h-full sticky object-cover bg-fixed" />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                {/* :
                null */}
            {/* } */}

            {/* ditail-item */}
            <div className="pt-[20px] pb-[66px] px-[26px] laptop:pt-[80px] laptop:pb-[80px] laptop:px-[120px] w-full laptop:w-1/2">
                {/* information */}
                <div className="">
                    {/* title */}
                    <div className="mb-[60px] font-[600] title-produk text-[15px] leading-[17px] laptop:leading-[20px] laptop:text-[18px]  ">
                        <h1 className="text-[15px] leading-[17px] laptop:leading-[20px] laptop:text-[18px]">Undefined</h1>
                        <p>Rp. 1.000.000</p>
                    </div>
                    {/* description */}
                    <div className="pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3]">
                        <p>
                            Description: 
                            blablabla
                        </p>
                    </div>
                    {/* button */}
                    <div className="pt-[24px] mt-[40px] border-t-[1px] border=[#d3d3d3]">
                        <ButtonDefault name={"Buy"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailItem