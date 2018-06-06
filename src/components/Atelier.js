import React, { Component } from 'react'
import Article from './Article.js'
import { store } from '../store'

class Atelier extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    const articles = this.state.articles.map(article =>
      <Article key={article.id} article={article} />
    )
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {articles}
      </div>
    )
  }
}

export default Atelier
