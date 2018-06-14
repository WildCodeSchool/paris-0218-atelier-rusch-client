import React from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import FiltersSection from './FiltersSection.js'
import store from '../store.js'

const Projets = () => {
  const state = store.getState()

  const determineClassName = article => article.hasStar === 'true' ? 'ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack' : 'ArticleThumbnailClassic'

  const articleThumbnails = state.articles.allArticles
    .filter(article => article.section === 'Projet')
    .map(article => <ArticleThumbnail key={article.id} article={article} className={determineClassName(article)}/>)

  const FiltersSectionHeight = document.getElementsByClassName('FiltersSection')
  console.log(FiltersSectionHeight.clientHeight)

  return (
    <div>
      <FiltersSection />

      <div className="ArticlesBlock">
        <SectionTitleBlock message="Tous nos projets super stylés avec des partenaires super stylés" />
        {articleThumbnails}
      </div>

    </div>
  )
}

export default Projets
