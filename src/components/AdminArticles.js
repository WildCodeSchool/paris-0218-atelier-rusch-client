import React, { Component } from 'react'
import Modale from './Modale.js'
import ArticleForm from './ArticleForm'
import ButtonCreateArticle from './ButtonCreateArticle.js'

const AdminArticles = ({data}) =>{
  const articles = data.map(el =>
    <div>
      <div> {el.title} </div>
      <div>{el.createdAt}</div>
      <button> éditer </button>
      <button> supprimer </button>
    </div>
    )
  return (
    <div>
      <ButtonCreateArticle />
      {articles}
    </div>
    )
}


export default AdminArticles
