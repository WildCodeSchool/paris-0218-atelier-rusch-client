import React from 'react'
import RedirectingBlockToAllArticles from './RedirectingBlockToAllArticles.js'
import ArticleThumbnail from './ArticleThumbnail.js'
import Modale from './Modale.js'
import './css/Homepage.css'
import Logo from './img/logo-rusch-noir.png'
import store from '../store.js'
import { SlideShow } from './Carousel.js'
import Nav from './Nav.js'

const Homepage = (props) => {
  const state = store.getState()

  const labArticles = state.articles.allArticles
    .filter(article => article.section === 'lab')

  const articleThumbnails = labArticles
    .slice(labArticles.length - 3, labArticles.length)
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className="ArticleThumbnailClassic" />)

/*  const slideshowArticles = state.articles.allArticles
    .sort((a, b) => Date(b.createdAt) - Date(a.createdAt))
    .slice(0, 3)  */

    const slideshowArticles = state.articles.allArticles
    .filter(article => article.section === 'projets')
    .filter(article => article.hasStar === 'true')
    .slice(0, 3)

    console.log(slideshowArticles)

  const articleId = props.articleId
  const selectedArticle = state.articles.allArticles.find(article => String(article.id) === articleId)
  console.log({articleId, selectedArticle})
  const modale = selectedArticle !== undefined
    ? <Modale article={selectedArticle} displayModale={'block'} />
    : ''

  return (
    <div>
      <Nav />
      <div className="IntroBlocks">

        <div className="IntroBlockLeft">
          <div className="LogoBlock">
            <img className="LogoImg" src={Logo} alt="logo Rusch" />
          </div>

       	  <div className="CarrouselBlock">
            <SlideShow articles={slideshowArticles} />
          </div>

        </div>

        <div className="IntroBlockRight">
          <h1>
            <span className="green bold">L’Atelier Rusch</span> propose des méthodes créatives pour organiser la pensée collective et co-concevoir de nouveaux services pour les collectivités et les entreprises.
            <br/>
            <span className="green bold">→  <span className="green bigLink">La suite !</span></span>
          </h1>
        </div>

      </div>

      <div className="ArticlesBlock">
        {articleThumbnails}
        <RedirectingBlockToAllArticles />
      </div>
      {modale}

    </div>
  )
}

export default Homepage
