import React, { Component } from 'react'
import Modale from './Modale.js'
import ArticleForm from './ArticleForm'
import ButtonCreateArticle from './ButtonCreateArticle.js'
import './css/AdminArticles.css'

const AdminArticles = ({data}) =>{
  const articles = data.map(el =>
    <div className='AdminArticle'>
      <div className='EditButtons'>
        <div className='currentText'>{el.title}</div>
      </div>
      <div className='EditButtons'>
        <h6 style={{ marginRight: '50px' }}>{el.createdAt}</h6>
        <h6 className='green' style={{ marginRight: '50px', width: '200px', textAlign: 'center' }}> {el.section} </h6>
        <button>Editer</button>
        <button>Supprimer</button>
      </div>
    </div>
    )
  return (
    <div>
      <div className='ArticlesContainer'>
      <ButtonCreateArticle />
        {articles}
      </div>
    </div>
    )
}

export default AdminArticles
