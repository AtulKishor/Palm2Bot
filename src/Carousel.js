import React from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const productImages = [
  'images/banner.jpg',
  'images/a.jpg',
  'images/b.jpg',
  'images/c.jpg',
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () =>{
return (
  <div className="carousel-container">
    <Slider {...settings}>
      {productImages.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Product ${index + 1}`} />
        </div>
      ))}
    </Slider>
  </div>
)}
export default Carousel