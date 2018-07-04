import ButtonCreateFiltre from './ButtonCreateFiltre.js'
import React, { Component } from 'react'
import { Link } from '@reach/router'
import './css/AdminFiltres.css'

const AdminMembers = ({ members }) => {

  const displayMembers = members
   .map(el =>
    <div className='AdminFiltre'>
      <div className='currentText'> {el.name} </div>
      <div className='EditButtons'>
        <h6 className='green' style={{ marginRight: '45px' }}> {el.position} </h6>
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
        <div className='ButtonCreateArticle'>Creer un nouveau membre</div>
      </Link>
      <div className='AdminTitles yellow'>Membres de l'équipe :</div>
      <div className='FiltresContainer'>
      {displayMembers}
      </div>
    </div>
  )
}

export default AdminMembers
