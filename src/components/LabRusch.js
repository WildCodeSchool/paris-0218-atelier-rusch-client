import React, { Component } from 'react'
import ArticleThumbnail from './ArticleThumbnail.js'
import Filter from './FiltersSection.js'
import SectionTitleBlock from './SectionTitleBlock.js'
import { store } from '../store.js'

class LabRusch extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    const articleThumbnails = this.state.articles
      .filter(article => article.section === 'Lab')
      .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} />)

    const filters = this.state.filters
      .filter(filter => filter.section === 'Lab')
      .map(filter => <Filter filter={filter} />)

    return (
      <div>

        <div className="FiltersSection">
          {filters}
        </div>

        <div className="ArticlesBlock">
          <SectionTitleBlock />
          {articleThumbnails}
        </div>

      </div>
    )
  }
}

export default LabRusch
