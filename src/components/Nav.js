import React from 'react'
import './css/Nav.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <button className='HomeLink' value='home'
        onClick={event => store.dispatch(setActivePage(event.target.value))}>
        RUSCH
      </button>
    </div>

    <div className="NavBarLinksContainer">

      <button className='NavBarLink' value='atelier'
        onClick={event => store.dispatch(setActivePage(event.target.value))}>
          Atelier
      </button>

      <button className='NavBarLink' value='projets'
        onClick={event => store.dispatch(setActivePage(event.target.value))}>
          Projets
      </button>

      <button className='NavBarLink' value='lab'
        onClick={event => store.dispatch(setActivePage(event.target.value))}>
          Lab Rusch
      </button>

      <button className='NavBarLink' value='contact'
        onClick={event => store.dispatch(setActivePage(event.target.value))}>
          Contact
      </button>

    </div>
  </div>

export default Nav
