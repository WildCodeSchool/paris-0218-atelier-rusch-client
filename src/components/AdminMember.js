// import React, { Component } from 'react'
// import AdminMemberForm from './AdminMemberForm'

// const submitNewMember = filtre => fetch('http://localhost:3456/filtres', {
//   method: 'post',
//   body: JSON.stringify(filtre),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// const submitUpdatedMember = filtre => fetch('http://localhost:3456/filtres', {
//   method: 'put',
//   body: JSON.stringify(filtre),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// export const AdminNewMember = () => {
//   return (
//     <div>
//       <AdminFiltreForm submitMember={submitNewFiltre} />
//     </div>
//   )
// }


// export const AdminEditMember = ({ filtreId, filtres }) => {
//   const filtre = filtres.find(a => String(a.id) === filtreId)

//   return (
//     <div>
//       { filtre ? <AdminFiltreForm member={member} submitFiltre={submitUpdatedMember} /> : <div>Loading..</div> }
//     </div>
//   )
// }
