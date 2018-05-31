import React from 'react'

const Nav = ({onPageChange}) =>
  <div>

    <button value='home'
      onClick={onPageChange}>
        Home
    </button>

    <button value='Atelier'
      onClick={onPageChange}>
        Atelier
    </button>

    <button value='Projets'
      onClick={onPageChange}>
        Projets
    </button>

    <button value='LabRusch'
      onClick={onPageChange}>
        Lab Rusch
    </button>

    <button value='Contact'
      onClick={onPageChange}>
        Contact
    </button>

  </div>

export default Nav
