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
    console.log('Carousel: ', articles)

  return (
    <Carousel autoPlay interval={5000} stopOnHover={true} infiniteLoop={true}>
      {articles.length > 0 ? imagesElements : ''}
    </Carousel>
  )
}


//onClick={() => console.log(`open modal for article ${article.id}`)}
// <Link to={String(articles.id)}>
//console.log(Object.entries(obj))
