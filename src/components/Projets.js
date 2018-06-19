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

  const determineClassName = article => article.hasStar === 'true' ? 'ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack' : 'ArticleThumbnailClassic'

  const getProjetsArticles = state.articles.allArticles
    .filter(article => article.section === 'Projet')

  const articleThumbnails = getProjetsArticles
    .map(article => <ArticleThumbnail key={article.id} article={article} className={determineClassName(article)}/>)

  const getFilteredArticles = state.articles.filteredArticles

  const filteredArticleThumbnails = getFilteredArticles
    .map(article => <ArticleThumbnail key={article.id} article={article} className={determineClassName(article)}/>)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Tous nos projets super stylés avec des partenaires super stylés" />
        {filteredArticleThumbnails}
        {articleThumbnails}
        <ButtonCreateArticle />
      </div>

    </div>
  )
}

export default Projets
