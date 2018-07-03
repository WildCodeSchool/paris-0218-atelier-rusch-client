import React from 'react'
import './css/ButtonCreateArticle.css'
import { Link } from '@reach/router'

const ButtonCreateFiltre = () =>
  <Link to='/AdminFiltreForm'>
    <div className='ButtonCreateArticle'>
    Créer un nouveau filtre
    </div>
  </Link>

export default ButtonCreateFiltre