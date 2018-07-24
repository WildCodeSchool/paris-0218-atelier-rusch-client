import React from 'react'
import AdminPartenaireForm from './AdminPartenaireForm'
import api from '../api.js'

export const AdminNewPartenaire = () => {
  return (
    <div>
      <AdminPartenaireForm partenaire={{}} submitPartenaire={api.newPartenaire} />
    </div>
  )
}

export const AdminEditPartenaire = ({ partenaireId, partenaires }) => {
  const partenaire = partenaires.find(a => String(a.id) === partenaireId)

  return (
    <div>{ partenaire
      ? <AdminPartenaireForm partenaire={partenaire} submitPartenaire={partenaire => api.updatePartenaire(partenaireId, partenaire)} />
      : <div className='loading'>Loading...</div> }
    </div>
  )
}
