import React, { Component } from 'react'
import { store } from '../store'
import ArticleThumbnail from './ArticleThumbnail.js'
import SectionTitleBlock from './SectionTitleBlock.js'

class Projets extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  render () {
    const articleThumbnails = this.state.articles.filter(article => article.section === 'Projet').map(article =>
      <ArticleThumbnail key={article.id} article={article} />
    )

    return (
      <div>

        <div className="FiltersSection">

        </div>

        <div className="ArticlesBlock">
          <SectionTitleBlock />
          {articleThumbnails}
        </div>

      </div>
    )
  }
}

export default Projets
