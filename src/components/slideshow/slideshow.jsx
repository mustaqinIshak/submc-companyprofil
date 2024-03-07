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

    const handdlehangeImage = () => {
        setIndexImage(indexImage => {
            if(indexImage === dataSlideshow.length - 1) {
                return 0
            } else {
                return indexImage + 1
            }
        }) 
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
        <div className="mb-[110px]" onClick={() => handdlehangeImage()}>
            <div className="w-auto flex overflow-hidden">
                {
                    dataSlideshow.map((item, index) => 
                        <img key={index} className="" src={item.url} style={{ translate: `${-100 * indexImage}%` }} />
                    )
                }
            </div>
            {/* <img className="show" src={dataSlideshow[0].url} />
            <img className="not-show" src={dataSlideshow[1].url} />
            <img className="not-show" src={dataSlideshow[2].url} /> */}
        </div>
    )
}

export default SlideShow;