import React from 'react'
import RedirectingBlockToAllArticles from './RedirectingBlockToAllArticles.js'
import ArticleThumbnail from './ArticleThumbnail.js'
import Modale from './Modale.js'
import './css/Homepage.css'
import Logo from './img/logo-rusch-noir.png'
import store from '../store.js'

const Homepage = () => {
  const state = store.getState()

  const getArticleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Lab')

  const articleThumbnails = getArticleThumbnails
    .slice(getArticleThumbnails.length - 3, getArticleThumbnails.length)
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className="ArticleThumbnailClassic" />)

  const selectedArticle = state.articles.selectedArticle

  const displayModale = state.articles.displayModale

  return (
    <div>
      <div className="IntroBlocks">

        <div className="IntroBlockLeft">
          <div className="LogoBlock">
            <img className="LogoImg" src={Logo} alt="logo Rusch" />
          </div>

          <div className="CarrouselBlock">

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
      <Modale article={selectedArticle} displayModale={displayModale} />

    </div>
  )
}

export default Homepage
