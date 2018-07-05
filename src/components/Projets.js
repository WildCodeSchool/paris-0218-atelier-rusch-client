import React from 'react'
import Nav from './Nav.js'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import FiltersSection from './FiltersSection.js'
import Modale from './Modale.js'
import store from '../store.js'
import { applyFiltersToSection } from './FilteringFunctions.js'

const Projets = (props) => {
  const state = store.getState()
  const articles = state.articles.allArticles
  const articleId = props.articleId
  const selectedArticle = articles.find(article => String(article.id) === articleId)
  const modale = selectedArticle !== undefined
    ? <div className='ModaleBlock'><Modale article={selectedArticle} displayModale={'block'} /></div>
    : ''

  const getFilteredArticles = applyFiltersToSection('projets', state)

  const filteredProjetsArticleThumbnails = getFilteredArticles
    .map((article, index) =>
      <ArticleThumbnail
        key={article.id}
        article={article}
        index={index}/>)

  return (
    <div>
      <Nav />
      <div className="spacer"></div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Tous nos projets super stylés avec des partenaires super stylés" />
        { filteredProjetsArticleThumbnails }
      </div>

      {modale}

    </div>
  )
}

export default Projets
