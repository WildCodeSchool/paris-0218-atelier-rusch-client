import React, { Component } from 'react'
import './css/AdminArticles.css'
import { Link } from '@reach/router'

const ArticleCard = ({ article }) =>
  <div className='AdminArticle'>
    <div className='currentText' style={{ width: '40vw' }}>{article.title}</div>
    <div className='EditButtons'>
      <h6 style={{ marginRight: '50px' }}>{article.createdAt}</h6>
      <Link to={String(article.id)}>
        <button>Editer</button>
      </Link>
      <button>Supprimer</button>
    </div>
  </div>

const AdminArticles = ({ articles }) => {
  const projetsArticlesList = articles
  .filter(article => article.section === 'projets')
  .map(article => <ArticleCard key={article.id} article={article} />)

  const labArticlesList = articles
  .filter(article => article.section === 'lab')
  .map(article => <ArticleCard key={article.id} article={article} />)

  return (
    <div className='FiltresGlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateArticle'>Créer un nouvel article</div>
      </Link>
      <div className='AdminTitles yellow'>Articles de la section Projets :</div>
      {projetsArticlesList}
      <br/>
      <div className='AdminTitles yellow'>Articles de la section LabRusch :</div>
      {labArticlesList}
    </div>
  )
}

export default AdminArticles
