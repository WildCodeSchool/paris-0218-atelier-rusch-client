import React from 'react'
import './css/Nav.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'
import NavLink from './NavLink.js'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <button className='HomeLink' value='Home'
        onClick={event => store.dispatch(setActivePage(event.target.value))}>
        RUSCH
      </button>
    </div>

    <div className="NavBarLinksContainer">
      <NavLink label='Atelier' />
      <NavLink label='Projets' />
      <NavLink label='LabRusch' />
      <NavLink label='Contact' />
    </div>

  </div>

export default Nav
