import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/Carousel.css'
import { Link } from '@reach/router'

export const SlideShow = ({ articles }) => {
  const imagesElements = articles.map(article =>
    <Link key={article.id} to={String(article.id)}>
      <img src={article.headerImage} alt={article.title} />
      <p className="legend">{article.title}</p>
    </Link>
  )

  return (
    <Carousel autoPlay interval={5000} stopOnHover={true} infiniteLoop={true}>
      {articles.length > 0 ? imagesElements : ''}
    </Carousel>
  )
}
