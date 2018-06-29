import React from 'react'
import './css/Partenaire.css'

const Partenaire = ({image, description}) =>
  <div className="PartenaireContainer">
    <img src={image} className="LogoPartenaire" />
    <h6>{description}</h6>
  </div>

export default Partenaire

// <div style={{background: `center / cover no-repeat url(${image})`}} className="LogoPartenaire"></div>
