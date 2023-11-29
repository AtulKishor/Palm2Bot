import React from "react"
import Carousel from "./Carousel"

const images = [
  'images/banner.jpg',
  'images/a.jpg',
  'images/b.jpg',
  'images/c.jpg',
]

const Home = () => {

  return (
  <div className="hero">
    <Carousel images={images} />
  </div>
  )
}
export default Home
