import React from 'react'
import './css/Equipe.css'
import michael from './img/michael.jpg'

const EquipeMember = ({member}) =>
  <div className="memberContainer" style={{ zIndex: `${member.id}` }}>
    <img className="memberPic" src={michael} alt={member.name} />
    <div className="memberName green">{member.name}</div>
    <h6>{member.position}</h6>
    <div className="memberContent">
      {member.description}
    </div>
    <div className="memberContent">
      <u>Son parcours</u> :&nbsp;
      {member.carreer}</div>
    <div className="smallLinksContainer">
      <a href={member.linkedIn} target='_blank' className="smallLink">Son LinkedIn</a>
    </div>
  </div>

export default EquipeMember
