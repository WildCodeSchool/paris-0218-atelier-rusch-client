import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import FiltersSection from './FiltersSection.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import ButtonCreateArticle from './ButtonCreateArticle'
import store from '../store.js'

const LabRusch = () => {
  const state = store.getState()

  const articleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Lab')
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className="ArticleThumbnailClassic" />)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Plein d'articles super intéressants sur des sujets super intéressants" />
        {articleThumbnails}
        <ButtonCreateArticle />
      </div>

    </div>
  )
}

export default LabRusch
