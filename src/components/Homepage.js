import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import './css/Homepage.css'
import Logo from './img/logo-rusch-noir.png'
import store from '../store.js'
import { SlideShow } from './Carousel.js'

const Homepage = () => {
  const state = store.getState()

  const articleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Lab')
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className="ArticleThumbnailClassic" />)

  const images = [
    { src: "http://lorempixel.com/output/cats-q-c-640-480-1.jpg", legend: 'Ceci est un chat' },
    { src: "http://lorempixel.com/output/cats-q-c-640-480-2.jpg", legend: 'Ceci est un chat' },
    { src: "http://lorempixel.com/output/cats-q-c-640-480-3.jpg", legend: 'Ceci est un chapacontent' },
  ]

  return (
    <div>
      <div className="IntroBlocks">

        <div className="IntroBlockLeft">
          <div className="LogoBlock">
            <img className="LogoImg" src={Logo} alt="logo Rusch" />
          </div>

          <div className="CarrouselBlock">
            <SlideShow images={images} />
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
      </div>

    </div>
  )
}

export default Homepage






// import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import { SlideShow } from './components/carousel.js'


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <p>Yo</p>
//       <SlideShow images={images} />
//       </div>
//     )
//   }
// }
// export default App
