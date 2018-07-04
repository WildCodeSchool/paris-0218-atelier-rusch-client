import React, { Component } from 'react'
import './css/AdminArticles.css'
import { Link } from '@reach/router'

const ArticleCard = ({ article }) =>
  <div className='AdminArticle'>
    <div className='currentText'>{article.title}</div>
    <div className='EditButtons'>
      <h6 style={{ marginRight: '50px' }}>{article.createdAt}</h6>
      <h6 className='green' style={{ marginRight: '50px', width: '200px', textAlign: 'center' }}> {article.section} </h6>
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
        <div className='ButtonCreateArticle'>Nouvel article</div>
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
