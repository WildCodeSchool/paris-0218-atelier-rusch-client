import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/Carousel.css'

export const SlideShow = ({ articles }) => {
  articles.map(a => a.headerImage)

  const imagesElements = articles.map(article =>
    <div key={article.id} onClick={() => console.log(`open modal for article ${article.id}`)}>
      <img src={article.headerImage} alt={article.title} />
      <p className="legend">{article.title}</p>
    </div>
  )

  return (
    <Carousel autoPlay interval={5000} stopOnHover={true} infiniteLoop={true}>
      {articles.length > 0 ? imagesElements : ''}
    </Carousel>
  )
}
