import React, { Component } from 'react'
import Article from './Article.js'

class Atelier extends Component {
  constructor () {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount () {
    fetch(`http://localhost:3003/article`)
      .then(result => result.json())
      .then(data => {
        console.log(data)
        this.setState({ articles: data})
      })
      .catch(console.error)
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
