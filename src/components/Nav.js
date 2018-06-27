import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'
import NavLink from './NavLink.js'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <Link to='/'>
        <button className='HomeLink' value='Home'>
          RUSCH
        </button>
      </Link>
    </div>

    <div className="NavBarLinksContainer">
      <NavLink label='Atelier' />
      <NavLink label='Projets' />
      <NavLink label='LabRusch' />
      <NavLink label='Contact' />
    </div>

  </div>

export default Nav
