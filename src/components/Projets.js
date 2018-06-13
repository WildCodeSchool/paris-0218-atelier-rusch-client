import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import FiltersSection from './FiltersSection.js'
import ButtonCreateArticle from './ButtonCreateArticle'
import store from '../store.js'

const Projets = () => {
  const state = store.getState()

  const articleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Projet')
    .map(article => <ArticleThumbnail key={article.id} article={article} />)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock />
        {articleThumbnails}
        <ButtonCreateArticle />
      </div>

    </div>
  )
}

export default Projets
