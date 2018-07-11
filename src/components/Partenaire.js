import React from 'react'
import './css/Partenaire.css'

const Partenaire = ({ partner }) =>
  <div className="PartenaireContainer">
    <img src={partner.image} className="LogoPartenaire" alt='' />
    <h6>{partner.shortDescription}</h6>
  </div>

export default Partenaire
