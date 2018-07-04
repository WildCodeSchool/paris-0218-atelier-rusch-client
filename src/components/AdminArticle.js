import React from 'react'
import ArticleForm from './ArticleForm'
import api from '../api'

export const AdminNewArticle = () => {
  return (
    <div>
      <ArticleForm submitArticle={api.newArticle} />
    </div>
  )
}


export const AdminEditArticle = ({ articleId, articles }) => {
  const article = articles.find(a => String(a.id) === articleId)

  return (
    <div>{article
      ? <ArticleForm article={article} submitArticle={article => api.updateArticle(articleId, article)} />
      : <div>Loading..</div> }
    </div>
  )
}
