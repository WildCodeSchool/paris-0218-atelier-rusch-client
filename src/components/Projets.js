import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import FiltersSection from './FiltersSection.js'
import Modale from './Modale.js'
import ButtonCreateArticle from './ButtonCreateArticle'
import store from '../store.js'
import { getActiveFilters, applyFiltersToSection } from './Filtering.js'

const Projets = () => {
  const state = store.getState()

  const determineClassName = article => article.hasStar === 'true' ? 'ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack' : 'ArticleThumbnailClassic'

  const getFilteredArticles = applyFiltersToSection('Projet', state)

  const filteredProjetsArticleThumbnails = getFilteredArticles
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
        <SectionTitleBlock message="Tous nos projets super stylés avec des partenaires super stylés" />
        { filteredProjetsArticleThumbnails }
        <ButtonCreateArticle />
      </div>

      <Modale article={state.articles.selectedArticle} displayModale={state.articles.displayModale} />

    </div>
  )
}

export default Projets
