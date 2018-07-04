import React, { Component } from 'react'
import { Link } from '@reach/router'
import './css/AdminFiltres.css'

const FiltreCard = ({ filtre }) => 
  <div className='AdminFiltre'>
    <div className='currentText'> {filtre.filterTag} </div>
    <div className='EditButtons'>
      <h6 className='green' style={{ marginRight: '45px' }}> {filtre.section} </h6>
      <Link to={String(filtre.id)}>
       <button>E</button>
      </Link>
      <button>S</button>
    </div>
  </div>

const AdminFiltres = ({ filtres }) => {

  const labFiltresList = filtres
  .filter(filtre => filtre.section === 'lab')
  .map(filtre =>
    <FiltreCard key={filtre.id} filtre={filtre} />
  )

  const projetsFiltresList = filtres
  .filter(filtre => filtre.section === 'projets')
  .map(filtre =>
    <FiltreCard key={filtre.id} filtre={filtre} />
  )


  return (
    <div className='FiltresGlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateArticle'>Créer un nouveau filtre</div>
      </Link>
      <div className='AdminTitles yellow'>Filtres de la section Projets :</div>
      <div className='FiltresContainer'>
      {projetsFiltresList}
      </div>
      <br/>
      <div className='AdminTitles yellow'>Filtres de la section LabRusch :</div>
      <div className='FiltresContainer'>
      {labFiltresList}
      </div>
    </div>
  )
}

export default AdminFiltres
