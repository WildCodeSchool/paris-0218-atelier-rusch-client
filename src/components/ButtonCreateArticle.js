import React from 'react'
import { Link } from '@reach/router'
import './css/ButtonCreateArticle.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'

const ButtonCreateArticle = ({onPageChange}) =>
  <Link to='/ArticleForm'>
    <div className='ButtonCreateArticle'>
    Créer un nouvel article
    </div>
  </Link>

export default ButtonCreateArticle
