import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/Carousel.css'
import { Link } from '@reach/router'

export const SlideShow = ({ articles }) => {
  const imagesElements = articles.map(article =>
    <Link key={article.id} to={String(article.id)}>
      <div className='carouselContainer'
      style={{ background: `0 / 100% no-repeat url(${article.headerImage})`}} 
      alt={article.title}> 
        <div className='FilterBlack' style={{ display: 'flex', flexDirection: 'column' }}>
          <h6 style={{ paddingBottom: '50px', fontSize: '1.25rem', color: 'white' }} >Projets</h6>
          <h5 style={{ paddingBottom: '60px' }} className='green'>{article.title}</h5>
        </div>
      </div>
      <img src='' alt={article.title} />
    </Link>
  )

  return (
    <Carousel autoPlay interval={5000} stopOnHover={true} infiniteLoop={true}>
      {articles.length > 0 ? imagesElements : ''}
    </Carousel>
  )
}


