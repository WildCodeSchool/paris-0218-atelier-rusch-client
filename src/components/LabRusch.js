import React, { Component } from 'react'
import Article from './Article.js'
import { store } from '../store'

class LabRusch extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    const articles = this.state.articles.filter(article => article.section === 'lab').map(article =>
      <Article key={article.id} article={article} />
    )
    return (
      <div>
        {articles}
      </div>
    )
  }
}

export default LabRusch
