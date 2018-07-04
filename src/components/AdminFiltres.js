import React from 'react'
import { Link } from '@reach/router'
import api from '../api.js'

const FiltreCard = ({ filtre }) => 
  <div className='AdminCardHalfWidth'>
    <div className='currentText'> {filtre.filterTag} </div>
    <div className='EditButtonsContainer'>
      <Link to={String(filtre.id)}>
       <button>E</button>
      </Link>
      	<button onClick={()=>{api.deleteFilter(el.id)
        window.location.reload()}}>S</button>
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
    <div className='GlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateElement'>Créer un nouveau filtre</div>
      </Link>
      <div className='AdminTitles yellow'>Filtres de la section Projets :</div>
      <div className='AdminCardHalfWidthContainer'>
      {projetsFiltresList}
      </div>
      <br/>
      <div className='AdminTitles yellow'>Filtres de la section LabRusch :</div>
      <div className='AdminCardHalfWidthContainer'>
      {labFiltresList}
      </div>
    </div>
  )
}

export default AdminFiltres
