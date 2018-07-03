import React, { Component } from 'react'
import Modale from './Modale.js'
import ArticleForm from './ArticleForm'
import ButtonCreateArticle from './ButtonCreateArticle.js'
import { Link } from '@reach/router'

const AdminArticles = ({ articles }) => {
  console.log('articles')

  const articlesList = articles.map(article =>
    <div key={article.id}>
      <div>{article.title}</div>
      <div>{article.createdAt}</div>
      <Link to={String(article.id)} data-article={article}>
        <button> éditer </button>
      </Link>
      <button> supprimer </button>
    </div>
  )

  return (
    <div>
      <ButtonCreateArticle />
      {articlesList}
    </div>
  )
}


export default AdminArticles
