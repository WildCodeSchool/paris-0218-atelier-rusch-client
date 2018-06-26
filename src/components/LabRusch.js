import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import FiltersSection from './FiltersSection.js'
import Modale from './Modale.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import ButtonCreateArticle from './ButtonCreateArticle'
import store from '../store.js'
import { getActiveFilters, applyFiltersToSection } from './Filtering.js'


const determineClassName = article => article.hasStar === 'true'
  ? 'ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack'
  : 'ArticleThumbnailClassic'

const LabRusch = () => {
  const state = store.getState()

  const getFilteredArticles = applyFiltersToSection('Lab', state)

  const filteredLabArticleThumbnails = getFilteredArticles
    .map((article, index) =>
      <ArticleThumbnail
        key={article.id}
        article={article}
        index={index}
        className={determineClassName(article)}/>)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Plein d'articles super intéressants sur des sujets super intéressants" />
        { filteredLabArticleThumbnails }
        <ButtonCreateArticle />
      </div>

      <Modale article={state.articles.selectedArticle} displayModale={state.articles.displayModale} />

    </div>
  )
}

export default LabRusch
