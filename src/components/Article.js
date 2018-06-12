import React from 'react'
import './css/Article.css'

const Article = ({ article }) => {
  return (
    <div>
      <h1 className="App-intro">
        {article.title}
      </h1>
      <h2 className="App-intro">
        {article.shortDescription}
      </h2>
      <p className="App-intro">
        {article.content}
      </p>
    </div>
  )
}

export default Article
