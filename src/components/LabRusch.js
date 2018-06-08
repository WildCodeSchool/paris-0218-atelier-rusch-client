import React, { Component } from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import { store } from '../store'
import FiltersSection from './FiltersSection.js'
import SectionTitleBlock from './SectionTitleBlock.js'

class LabRusch extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    const articleThumbnails = this.state.articles.filter(article => article.section === 'Lab').map(article =>
      <ArticleThumbnail key={article.id} article={article} />
    )
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

export default LabRusch
