import {React, useEffect, useState } from "react";
import slide1 from "../../assets/slideshow/SLIDE1.jpg"
import slide2 from "../../assets/slideshow/SLIDE2.jpg"
import slide3 from "../../assets/slideshow/SLIDE3.jpg"
import "./slideshow.css";

const dataSlideshow = [
    {
        name: "slide1",
        url: slide1
    },
    {
        name: "slide2",
        url: slide2
    },
    {
        name: "slide3",
        url: slide3
    },
]
function SlideShow() {
    const [indexImage, setIndexImage] = useState(0)
    const [pause, setPause] = useState(false);
    const [css, setCss] = useState(true)
    const handdlehangeImage = () => {
        setCss(false)
        setIndexImage(indexImage => {
            if(indexImage === dataSlideshow.length - 1) {
                return 0
            } else {
                return indexImage + 1
            }
        }) 
        setCss(true)
   
    }

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
      });

    return (
        <div id="carouselFade" className="mb-[110px] w-full carousel slide carousel-fade" data-ride="carousel" onClick={() => handdlehangeImage()}>
            <div className="carousel-inner">
                {
                    dataSlideshow.map((item,index) => 
                        <img key={index} className={index === indexImage ? "item active" : "item"}  src={item.url} />
                    )
                }
            </div>
        </div>
    )
}

export default SlideShow;