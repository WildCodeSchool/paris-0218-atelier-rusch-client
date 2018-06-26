import React from 'react'
import { actions } from '../store.js'
import store from '../store.js'
import { setActivePage } from '../actions.js'

const ButtonEditCarousel = ({onPageChange}) =>
  <div className='ButtonCreateArticle'
    onClick={event => store.dispatch(setActivePage('articleForm'))}>
Créer un nouvel article
  </div>

export default ButtonCreateArticle
