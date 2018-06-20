import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './css/Carousel.css'


export const SlideShow = ({ images }) => {
  const imagesElements = images.map(image =>
    <div>
      <img src={image.src} />
      <p className="legend">{image.legend}</p>
    </div>
  )

  return (
    <Carousel autoPlay interval={(5000)} stopOnHover={true} infiniteLoop={true}>
      {imagesElements}
    </Carousel>
  )
}


