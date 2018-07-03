import React from 'react'
import './css/ButtonsCreateElement.css'
import { Link } from '@reach/router'

const ButtonCreateFiltre = () =>
  <Link to='/new'>
    <div className='ButtonCreateArticle'>
    <div className='currentText'>Créer un nouveau filtre</div>
    </div>
  </Link>

export default ButtonCreateFiltre
