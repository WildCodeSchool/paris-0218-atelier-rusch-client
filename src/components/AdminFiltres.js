import ButtonCreateFiltre from './ButtonCreateFiltre.js'
import React, { Component } from 'react'
import { Link } from '@reach/router'
import './css/AdminFiltres.css'

const AdminFiltres = ({ filtres }) => {

  const labFiltres = filtres
  .filter(filtre => filtre.section === 'LabRusch')
  .map(el =>
    <div className='AdminFiltre'>
      <div className='currentText'> {el.filterTag} </div>
      <div className='EditButtons'>
        <h6 className='green' style={{ marginRight: '45px' }}> {el.section} </h6>
      	<button>E</button>
      	<button>S</button>
      </div>
    </div>
  )

  const projetsFiltres = filtres
  .filter(filtre => filtre.section === 'Projets')
   .map(el =>
    <div className='AdminFiltre'>
      <div className='currentText'> {el.filterTag} </div>
      <div className='EditButtons'>
      	<h6 className='green' style={{ marginRight: '45px' }}> {el.section} </h6>
      	<button>E</button>
      	<button>S</button>
      </div>
    </div>
  )


  return (
    <div className='FiltresGlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateArticle'>Creer un nouveau filtre</div>
      </Link>
      <div className='AdminTitles yellow'>Filtres de la section LabRusch :</div>
      <div className='FiltresContainer'>
      {labFiltres}
      </div>
      <br/>
      <div className='AdminTitles yellow'>Filtres de la section Projets :</div>
      <div className='FiltresContainer'>
      {projetsFiltres}
      </div>
    </div>
  )
}

export default AdminFiltres
