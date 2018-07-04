import ButtonCreateFiltre from './ButtonCreateFiltre.js'
import React, { Component } from 'react'
import { Link } from '@reach/router'
import './css/AdminFiltres.css'

const AdminPartenaires = ({ partenaires }) => {

  console.log(partenaires)

  const allPartenaires = partenaires
   .map(el =>
    <div className='AdminFiltre'>
      <div className='currentText'> {el.shortDescription} </div>
      <div className='EditButtons'>
        <Link to={String(el.id)}>
      	 <button>E</button>
        </Link>
      	 <button>S</button>
      </div>
    </div>
  )


  return (
    <div className='FiltresGlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateArticle'>Creer un nouveau partenaire</div>
      </Link>
      <div className='FiltresContainer'>
      {allPartenaires}
      </div>
    </div>
  )
}

export default AdminPartenaires
