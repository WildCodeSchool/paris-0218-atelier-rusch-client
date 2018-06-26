import React from 'react'
import './css/ButtonCreateArticle.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'

const ButtonCreateArticle = ({onPageChange}) =>
  <div className='ButtonCreateArticle'
    onClick={event => store.dispatch(setActivePage('articleForm'))}>
Créer un nouvel article
  </div>

export default ButtonCreateArticle
