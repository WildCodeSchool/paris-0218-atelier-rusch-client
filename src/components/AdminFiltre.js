import React from 'react'
import AdminFiltreForm from './AdminFiltreForm'
import api from '../api.js'

export const AdminNewFiltre = () => {
  return (
    <div>
      <AdminFiltreForm filtre={{}} submitFiltre={api.newFilter} />
    </div>
  )
}

export const AdminEditFiltre = ({ filtreId, filtres }) => {
  const filtre = filtres.find(a => String(a.id) === filtreId)

  return (
    <div>{filtre
      ? <AdminFiltreForm filtre={filtre} submitFiltre={filtre => api.updateFilter(filtreId, filtre)} />
      : <div className='loading'>Loading...</div> }
    </div>
  )
}
