import {React, useRef, useState } from "react";
import slide1 from "../../assets/slideshow/SLIDE1.jpg"
import slide2 from "../../assets/slideshow/SLIDE2.jpg"
import slide3 from "../../assets/slideshow/SLIDE3.jpg"
import "./style.css";

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
    return (
        <div className="">
            {
                dataSlideshow.map((item, index) => <img key={index} src={(item.url)} />)
            }
        </div>
    )
}

export default SlideShow;