import React, { Component } from 'react'
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
    <div>
      { filtre ? <AdminFiltreForm filtre={filtre} submitFiltre={api.updateFilter} /> : <div>Loading..</div> }
    </div>
  )
}
