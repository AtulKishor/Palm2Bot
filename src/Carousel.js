import React from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Carousel = (props) =>{
return (
    <Slider {...settings}>
      {props.images.map((image, index) => (
        <div key={index}>
          <img src={image}  alt={`${index + 1}`} />
        </div>
      ))}
    </Slider>
)}
export default Carousel