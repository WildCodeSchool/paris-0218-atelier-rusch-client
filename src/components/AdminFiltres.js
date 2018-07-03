import ButtonCreateFiltre from './ButtonCreateFiltre.js'
import React, { Component } from 'react'
import './css/AdminFiltres.css'

const AdminFiltres = ({ data }) => {

  const labFiltres = data
  .filter(filtre => filtre.section === 'LabRusch')
  .map(el =>
    <div className='AdminFiltre'>
      <div className='currentText'> {el.filterTag} </div>
      <div className='EditButtons'>
        <h6 className='green' style={{ marginRight: '45px' }}> {el.section} </h6>
      	<button>Editer</button>
      	<button>Supprimer</button>
      </div>
    </div>
  )

  const projetsFiltres = data
  .filter(filtre => filtre.section === 'Projets')
   .map(el =>
    <div className='AdminFiltre'>
      <div className='currentText'> {el.filterTag} </div>
      <div className='EditButtons'>
      	<h6 className='green' style={{ marginRight: '45px' }}> {el.section} </h6>
      	<button>Editer</button>
      	<button>Supprimer</button>
      </div>
    </div>
  )


  return (
    <div>
      <ButtonCreateFiltre />
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