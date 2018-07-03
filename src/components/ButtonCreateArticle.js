import React from 'react'
import './css/ButtonsCreateElement.css'
import { Link } from '@reach/router'

const ButtonCreateArticle = () =>
  <Link to='/ArticleForm'>
    <div className='ButtonCreateArticle'>
    <div className='currentText'>Créer un nouvel article</div>
    </div>
  </Link>

export default ButtonCreateArticle
