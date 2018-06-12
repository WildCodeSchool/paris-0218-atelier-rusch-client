import React from 'react'
import './css/Nav.css'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <button className='HomeLink' value='home'
        onClick={onPageChange}>
        RUSCH
      </button>
    </div>

    <div className="NavBarLinksContainer">

      <button className='NavBarLink' value='atelier'
        onClick={onPageChange}>
          Atelier
      </button>

      <button className='NavBarLink' value='projets'
        onClick={onPageChange}>
          Projets
      </button>

      <button className='NavBarLink' value='lab'
        onClick={onPageChange}>
          Lab Rusch
      </button>

      <button className='NavBarLink' value='contact'
        onClick={onPageChange}>
          Contact
      </button>

    </div>
  </div>

export default Nav
