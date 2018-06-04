import React from 'react'

const Nav = ({onPageChange}) =>
  <div>
    <p>Ceci est une navbar </p>

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

export default Nav
