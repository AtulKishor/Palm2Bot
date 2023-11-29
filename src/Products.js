import React from "react"
import Carousel from "./Carousel"

const num_images = 7
const products = Array.from({ length: num_images }, (_, index) => `Products/prod_${index + 1}.png`)

const Products = () => {

  return (
  <div className="hero">
    <Carousel images={products} />
  </div>)
}
export default Products
