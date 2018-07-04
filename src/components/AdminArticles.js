import React, { Component } from 'react'
import './css/AdminArticles.css'
import { Link } from '@reach/router'
import api from '../api.js'

const ArticleCard = ({ article }) =>
  <div className='AdminArticle'>
    <div className='EditButtons'>
      <div className='currentText'>{article.title}</div>
    </div>
    <div className='EditButtons'>
      <h6 style={{ marginRight: '50px' }}>{article.createdAt}</h6>
      <h6 className='green' style={{ marginRight: '50px', width: '200px', textAlign: 'center' }}> {article.section} </h6>
      <Link to={String(article.id)}>
        <button>Editer</button>
      </Link>
      <button onClick={()=>{api.deleteArticle(article.id)
        window.location.reload()}}>Supprimer</button>
    </div>
  </div>

const AdminArticles = ({ articles }) => {
  const articlesList = articles.map(article => <ArticleCard key={article.id} article={article} />)

  return (
    <div className='ArticlesContainer'>
      <Link to='new'>
        <div className='ButtonCreateArticle'>Nouvel article</div>
      </Link>
      {articlesList}
    </div>
  )
}

export default AdminArticles
