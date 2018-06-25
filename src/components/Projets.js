import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import FiltersSection from './FiltersSection.js'
import Modale from './Modale.js'
import ButtonCreateArticle from './ButtonCreateArticle'
import store from '../store.js'
import { filterArticles } from '../actions.js'

const Projets = () => {
  const state = store.getState()

  const selectedArticle = state.articles.selectedArticle

  const displayModale = state.articles.displayModale

  const determineClassName = article => article.hasStar === 'true' ? 'ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack' : 'ArticleThumbnailClassic'

  const getProjetsArticles = state.articles.allArticles
    .filter(article => article.section === 'Projet')

  const allArticleThumbnails = getProjetsArticles
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className={determineClassName(article)}/>)

  const getFilteredArticles = state.articles.filteredArticles
    .filter(article => article.section === 'Projet')

  const filteredArticleThumbnails = getFilteredArticles
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className={determineClassName(article)}/>)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Tous nos projets super stylés avec des partenaires super stylés" />
        { state.articles.filteredArticles.length === 0 ? allArticleThumbnails : filteredArticleThumbnails }
        <ButtonCreateArticle />
      </div>

      <Modale article={selectedArticle} displayModale={displayModale} />

    </div>
  )
}

export default Projets
