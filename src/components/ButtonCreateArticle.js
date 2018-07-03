import React from 'react'
import './css/ButtonCreateArticle.css'
import { Link } from '@reach/router'

const ButtonCreateArticle = () =>
  <Link to='/ArticleForm'>
    <div className='ButtonCreateArticle'>
    Créer un nouvel article
    </div>
  </Link>

export default ButtonCreateArticle
