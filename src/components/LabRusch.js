import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import FiltersSection from './FiltersSection.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import store from '../store.js'

const LabRusch = () => {

  const state = store.getState()

  const articleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Lab')
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} />)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock />
        {articleThumbnails}
      </div>

    </div>
  )
}

export default LabRusch
