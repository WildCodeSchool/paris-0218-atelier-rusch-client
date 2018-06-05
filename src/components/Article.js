import React from 'react'

const Article = ({ article }) =>{
  return(
<div>
  <p className="App-intro">
    {article.title}
  </p>
  <p className="App-intro">
    {article.shortDescription}
  </p>
  <p className="App-intro">
    {article.content}
  </p>
</div>
    )
}

export default Article
