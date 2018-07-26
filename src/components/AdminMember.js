import React from 'react'
import AdminMemberForm from './AdminMemberForm'
import api from '../api.js'

export const AdminNewMember = () => {
  return (
    <div>
      <AdminMemberForm member={{}} submitMember={api.newMember} />
    </div>
  )
}

export const AdminEditMember = ({ memberId, members }) => {
  const member = members.find(a => String(a.id) === memberId)

  return (
    <div>
      { member
        ? <AdminMemberForm member={member} submitMember={member => api.updateMember(memberId, member)} />
        : <div className='loading'>Loading...</div> }
    </div>
  )
}
