import React, { Component } from 'react'
import { store } from '../store'
import ArticleThumbnail from './ArticleThumbnail.js'

class Projets extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  render () {
    const articles = this.state.articles.filter(article => article.section === 'project').map(article =>
      <ArticleThumbnail key={article.id} article={article} />
    )
    return (
      <div>
        {articles}
      </div>
    )
  }
}

export default Projets
