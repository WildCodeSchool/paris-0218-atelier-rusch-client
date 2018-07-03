import React, { Component } from 'react'
import AdminFiltreForm from './AdminFiltreForm'

const submitNewFiltre = filtre => fetch('http://localhost:3456/filtres', {
  method: 'post',
  body: JSON.stringify(filtre),
  headers: {
    'Content-Type': 'application/json'
  }
})

const submitUpdatedFiltre = filtre => fetch('http://localhost:3456/filtres', {
  method: 'put',
  body: JSON.stringify(filtre),
  headers: {
    'Content-Type': 'application/json'
  }
})

export const AdminNewFiltre = () => {
  return (
    <div>
      <AdminFiltreForm submitFiltre={submitNewFiltre} />
    </div>
  )
}


export const AdminEditFiltre = ({ filtreId, filtres }) => {
  const filtre = filtres.find(a => String(a.id) === filtreId)

  return (
    <div>
      { filtre ? <AdminFiltreForm filtre={filtre} submitFiltre={submitUpdatedFiltre} /> : <div>Loading..</div> }
    </div>
  )
}
