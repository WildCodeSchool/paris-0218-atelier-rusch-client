import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/Carousel.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'

export const SlideShow = ({ articles }) => {
  articles.map(a => a.headerImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkU2l91q3f7KceFx1FP7BbXBx_LCOt4Zs79JrS52iSu4k63Py') // TODO: rm

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
