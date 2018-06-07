import React from 'react'

const Nav = ({onPageChange}) =>
  <div className="NavBar">
    <div className="Logo">RUSCH</div>
    <div className="NavBarLinks">

      <button value='home'
        onClick={onPageChange}>
          Home
      </button>

      <button value='atelier'
        onClick={onPageChange}>
          Atelier
      </button>

      <button value='projets'
        onClick={onPageChange}>
          Projets
      </button>

      <button value='lab'
        onClick={onPageChange}>
          Lab Rusch
      </button>

      <button value='contact'
        onClick={onPageChange}>
          Contact
      </button>

    </div>
  </div>

export default Nav
