import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
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
      <NavLink to='atelier' label='Atelier' />
      <NavLink to='projets' label='Projets' />
      <NavLink to='lab' label='LabRusch' />
      <NavLink to='contact' label='Contact' />
    </div>

  </div>

export default Nav
