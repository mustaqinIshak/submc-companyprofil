import {React, useEffect, useState, useRef } from "react";
import { getIndex } from "../../api/bannerHome";
// import slide1 from "../../assets/slideshow/SLIDE1.jpg"
// import slide2 from "../../assets/slideshow/SLIDE2.jpg"
// import slide3 from "../../assets/slideshow/SLIDE3.jpg"
import default_slide from "../../assets/slideshow/banner_tagline.png";
import "./slideshow.css";
import { Link } from "react-router-dom";
import style from "./slideshow.module.sass"

function SlideShow() {
    const [bannerHomes, setBannerHomes] = useState([])
    const [activeImage, setActiveImage] = useState(0);
    const ImageScroll = useRef([]);

    // function scrollToImage(imageNumber) {
    //     const ref = GetRefByImageNumber(imageNumber);
    //     console.log(ref)
    //     if (ref) {
    //         ref.scrollIntoView({
    //         behavior: "smooth",
    //       });
    //     }
    // }

    // function GetRefByImageNumber(imageNumber) {
    //     return ImageScroll.current[imageNumber]
    //   }

    function handleScrollImage(index) {
        setActiveImage(index);
        scrollToImage(index);
    }

    const handleGetBannerHome = async () => {
        try {
            const result = await getIndex()
            setBannerHomes([...result])
            if(result.length)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
//     const handdlehangeImage = () => {
//         setCss(false)
//         setIndexImage(indexImage => {
//             if(indexImage === bannerHomes.length - 1) {
//                 return indexImage - (bannerHomes.length - 1)
//             } else {
//                 return indexImage + 1
//             }
//         }) 
//         setCss(true)
   
//     }

    useEffect(() => {
        handleGetBannerHome()
    },[])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(activeImage === (bannerHomes.length - 1) ) {
                    setActiveImage(0);
                    // scrollToImage(0);
            } else {
                const nextImage = (activeImage % (bannerHomes.length - 1) ) + 1; // Assuming have 3 images. Adjust Accordingly
              setActiveImage(nextImage);
            //   scrollToImage(nextImage);
          }
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, [activeImage]);

    return (
        <div id="carouselFade" className={style.wrapper}  data-ride="carousel" >
            {/* add new nav block */}
            <nav className={style.carousel__navigation}> 
                {
                    bannerHomes.map((item,index) => 
                        <div key={index} className={
                            activeImage === index
                              ? `${style.nav_item} ${style.active}`
                              : `${style.nav_item}`
                          } onClick={() => handleScrollImage(index)}></div>
                    )
                }
            </nav>
            {
                bannerHomes.length ? 
                <ul className={style.carousel_inner}>
                {
                    bannerHomes.map((item,index) => 
                        bannerHomes.link ?
                        <li key={index} className={style.carousel_inner__item} style={{ transform: `translateX(-${activeImage * 100}%)` }} >
                            <Link  to={item.link}>
                                    <img src={item.gambar} ref={el => ImageScroll.current[index] = el}/>
                            </Link>
                        </li>
                        :
                        <li key={index} className={style.carousel_inner__item } style={{ transform: `translateX(-${activeImage * 100}%)` }} >
                            <img src={item.gambar} ref={el => ImageScroll.current[index] = el} />
                        </li>
                    )
                }
                </ul>
                :
                <img src={default_slide}/>
                
            }
            
        </div>
    )
}

export default SlideShow;