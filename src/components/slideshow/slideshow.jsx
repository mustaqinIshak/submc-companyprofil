import {React, useEffect, useState } from "react";
import { getIndex } from "../../api/bannerHome";
import slide1 from "../../assets/slideshow/SLIDE1.jpg"
import slide2 from "../../assets/slideshow/SLIDE2.jpg"
import slide3 from "../../assets/slideshow/SLIDE3.jpg"
import "./slideshow.css";
import { Link } from "react-router-dom";

const dataSlideshow = [
    {
        gambar: slide1,
        link: ""
    },
    {
        gambar: slide2,
        link: ""
    },
    {
        gambar: slide3,
        link: ""
    },
]
function SlideShow() {
    const [bannerHomes, setBannerHomes] = useState([])
    const [indexImage, setIndexImage] = useState(0)
    const [pause, setPause] = useState(false);
    const [css, setCss] = useState(true)

    const handleGetBannerHome = async () => {
        try {
            const result = await getIndex()
            if(result.length) {
                setBannerHomes([...result])
            } else {
                setBannerHomes([...dataSlideshow])
            }
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    const handdlehangeImage = () => {
        setCss(false)
        setIndexImage(indexImage => {
            if(indexImage === bannerHomes.length - 1) {
                return 0
            } else {
                return indexImage + 1
            }
        }) 
        setCss(true)
   
    }

    useEffect(() => {
        handleGetBannerHome()
    },[])

    useEffect(() => {
        let interval = setInterval(() => {
          if (!pause) {
            handdlehangeImage();
          } else {
            clearInterval(interval);
        }
        // console.log(indexImage)
        }, 5000);
        return () => clearInterval(interval);
      },[]);

    return (
        <div id="carouselFade" className="mb-[110px] w-full carousel slide carousel-fade" data-ride="carousel" onClick={() => handdlehangeImage()}>
            <div className="carousel-inner">
                {
                    bannerHomes.map((item,index) => 
                        bannerHomes.link ?
                        <Link key={index} to={item.link}>
                            <img  className={index === indexImage ? "item active" : "item"}  src={item.gambar} />
                        </Link>
                        :
                        <img key={index} className={index === indexImage ? "item active" : "item"}  src={item.gambar} />
                    )
                }
            </div>
        </div>
    )
}

export default SlideShow;