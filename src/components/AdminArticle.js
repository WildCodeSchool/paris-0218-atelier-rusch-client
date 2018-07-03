import React, { Component } from 'react'
import ArticleForm from './ArticleForm'

const submitNewArticle = article => fetch('http://localhost:3456/articles', {
  method: 'post',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  }
})

const submitUpdatedArticle = article => fetch('http://localhost:3456/articles', {
  method: 'put',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  }
})

export const AdminNewArticle = () => {
  return (
    <div>
      <ArticleForm submitArticle={submitNewArticle} />
    </div>
  )
}


export const AdminEditArticle = ({ articleId, articles }) => {
  const article = articles.find(a => String(a.id) === articleId)

  return (
    <div>
      { article ? <ArticleForm article={article} submitArticle={submitUpdatedArticle} /> : <div>Loading..</div> }
    </div>
  )
}
