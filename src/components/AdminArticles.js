import React, { Component } from 'react'
import { Link } from '@reach/router'

const ArticleCard = ({ article }) =>
  <div>
    <div>{article.title}</div>
    <div>{article.createdAt}</div>
    <Link to={String(article.id)}>
      <button>éditer</button>
    </Link>
    <button>supprimer</button>
  </div>

const AdminArticles = ({ articles }) => {
  const articlesList = articles.map(article => <ArticleCard key={article.id} article={article} />)

  return (
    <div>
      <Link to='new'>
        <div className='ButtonCreateArticle'>Nouvel article</div>
      </Link>
      {articlesList}
    </div>
  )
}

export default AdminArticles
