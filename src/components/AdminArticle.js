import React, { Component } from 'react'
import ArticleForm from './ArticleForm'

const AdminArticle = ({ articleId, articles }) => {
  let article = articles.find(a => String(a.id) === articleId)

  // todo: rm all this
  if (article) {
    article = { ...article }
    article.content = JSON.parse(article.content)
  }

  console.log('ARTICLE RENDER', {article})

  return (
    <div>
      <ArticleForm article={article} />
    </div>
  )
}


export default AdminArticle
