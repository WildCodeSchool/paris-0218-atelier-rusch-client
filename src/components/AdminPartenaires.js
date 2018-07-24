import React from 'react'
import { Link } from '@reach/router'
import api from '../api.js'
import IoAndroidDelete from 'react-icons/lib/io/android-delete'
import IoEdit from 'react-icons/lib/io/edit'
import MdAdd from 'react-icons/lib/md/add-circle-outline'

const AdminPartenaires = ({ partenaires }) => {
  console.log(partenaires)

  const allPartenaires = partenaires
    .map(el =>
      <div className='AdminCardHalfWidth'>
        <div className='currentText'> {el.name} </div>
        <div className='EditButtonsContainer'>
          <Link to={String(el.id)}>
            <button className="ReactIcon">
              <IoEdit/>
            </button>
          </Link>
          <button className="ReactIcon" onClick={() => {
            if (window.confirm('la suppression est irréversible. Pas de regrets?')) {
              api.deletePartenaire(el.id)
              window.location.reload()
            } else {

            }
          }}>
            <IoAndroidDelete/>
          </button>
        </div>
      </div>
    )

  return (
    <div className='GlobalContainer'>
      <Link to='new' onClick={() => window.scrollTo(0, 0)}>
        <div className='ButtonCreateElement'><MdAdd className='ReactIconAdd' />Créer un nouveau partenaire</div>
      </Link>
      <div className='AdminTitles yellow'>Partenaires :</div>
      <div className='AdminCardHalfWidthContainer'>
        {allPartenaires}
      </div>
    </div>
  )
}

export default AdminPartenaires
