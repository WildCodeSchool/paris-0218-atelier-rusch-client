import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
import NavLink from './NavLink.js'
import Logo from './img/logo-rusch-noir.png'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <Link to='/Homepage'>
        <button className='HomeLink' value='Home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo}/>
        </button>
      </Link>
    </div>

    <div className="NavBarLinksContainer">
      <NavLink to='Atelier' label='Atelier' />
      <NavLink to='Projets' label='Projets' />
      <NavLink to='LabRusch' label='LabRusch' />
      <NavLink to='Contact' label='Contact' />
    </div>

  </div>

export default Nav
