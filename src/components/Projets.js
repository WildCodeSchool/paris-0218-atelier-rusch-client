import React, { Component } from 'react'
import { store } from '../store'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import FiltersSection from './FiltersSection.js'

class Projets extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  render () {
    const { articles } = this.state.app

    const articleThumbnails = articles
      .filter(article => article.section === 'Projet')
      .map(article => <ArticleThumbnail key={article.id} article={article} />)

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
}

export default Projets
