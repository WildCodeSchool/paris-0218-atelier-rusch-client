import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import FiltersSection from './FiltersSection.js'
import Modale from './Modale.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import ButtonCreateArticle from './ButtonCreateArticle'
import store from '../store.js'

const LabRusch = () => {
  const state = store.getState()

  const selectedArticle = state.articles.selectedArticle

  const displayModale = state.articles.displayModale

  const determineClassName = article => article.hasStar === 'true' ? 'ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack' : 'ArticleThumbnailClassic'

  const getProjetsArticles = state.articles.allArticles
    .filter(article => article.section === 'Lab')

  const allLabArticleThumbnails = getProjetsArticles
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className={determineClassName(article)}/>)

    const getFilteredArticles = state.articles.filteredArticles
    .filter(article => article.section === 'Lab')

  const filteredLabArticleThumbnails = getFilteredArticles
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className={determineClassName(article)}/>)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Plein d'articles super intéressants sur des sujets super intéressants" />
        { state.articles.filteredArticles.length === 0 ? allLabArticleThumbnails : filteredLabArticleThumbnails }
        <ButtonCreateArticle />
      </div>

      <Modale article={selectedArticle} displayModale={displayModale} />

    </div>
  )
}

export default LabRusch
