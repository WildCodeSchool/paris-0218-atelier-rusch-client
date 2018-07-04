import React from 'react'
import './css/Partenaire.css'

const Partenaire = ({image, description}) =>
  <div className="PartenaireContainer">
    <img src={image} className="LogoPartenaire" alt='' />
    <h6>{description}</h6>
  </div>

export default Partenaire
