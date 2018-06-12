import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import './css/Homepage.css'
import './css/App.css'
import Logo from './img/logo-rusch-noir.png'
import store from '../store.js'

const Homepage = () => {
  const state = store.getState()

  const articleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Lab')
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} />)

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
          <p>
            <span className="green HeimatBold">L’Atelier Rusch</span> propose des méthodes créatives pour organiser la pensée collective et co-concevoir de nouveaux services pour les collectivités et les entreprises.
            <br/>
            <span className="green HeimatBold">→  La suite !</span>
          </p>
        </div>

      </div>

      <div className="ArticlesBlock">
        {articleThumbnails}
      </div>

    </div>
  )
}

export default Homepage
