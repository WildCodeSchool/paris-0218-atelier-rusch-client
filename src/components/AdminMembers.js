import React from 'react'
import { Link } from '@reach/router'
import api from '../api.js'

const AdminMembers = ({ members }) => {

  const displayMembers = members
   .map(el =>
    <div className='AdminCardHalfWidth'>
      <div className='currentText'> {el.name} </div>
      <div className='EditButtonsContainer'>
        <Link to={String(el.id)}>
         <button>E</button>
        </Link>
         <button onClick={()=>{api.deleteMember(el.id)
        window.location.reload()}}>S</button>
      </div>
    </div>
  )

  return (
    <div className='GlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateElement'>Créer un nouveau membre</div>
      </Link>
      <div className='AdminTitles yellow'>Membres de l'équipe :</div>
      <div className='AdminCardHalfWidthContainer'>
      {displayMembers}
      </div>
    </div>
  )
}

export default AdminMembers
