import React from 'react'
import './css/Equipe.css'
import michael from './img/michael.jpg'

const EquipeMember = ({imageUrl, name, position, expertise, links}) =>
  <div className="memberContainer">
    <img className="memberPic" src={michael} />
    <div className="memberName green bold">Michael Schnell</div>
    <h6>Designer, expert en co-design et conception de projet</h6>
    <div>Michael Schnell</div>
  </div>

export default EquipeMember
