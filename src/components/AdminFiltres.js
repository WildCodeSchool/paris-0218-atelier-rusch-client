import React from 'react'
import { Link } from '@reach/router'
import api from '../api.js'
import IoAndroidDelete from 'react-icons/lib/io/android-delete'
import IoEdit from 'react-icons/lib/io/edit'
import MdAdd from 'react-icons/lib/md/add-circle-outline'

const FiltreCard = ({ filtre }) =>
  <div className='AdminCardHalfWidth'>
    <div className='currentText'> {filtre.filterTag} </div>
    <div className='EditButtonsContainer'>
      <Link to={String(filtre.id)}>
        <button className="ReactIcon">
          <IoEdit/>
        </button>
      </Link>
      	<button className="ReactIcon" onClick={()=>{api.deleteFilter(filtre.id)
        window.location.reload()}}>
          <IoAndroidDelete/>
        </button>
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
      <Link to='new' onClick={() => window.scrollTo(0, 0)}>
        <div className='ButtonCreateElement'><MdAdd className='ReactIconAdd' />Créer un nouveau filtre</div>
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
