import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
import Logo from './img/logo-rusch-noir.png'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <Link to='/homepage'>
        <button className='HomeLink' value='Home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo}/>
        </button>
      </Link>
    </div>

    <div className="NavBarLinksContainer">
      <Link className='NavBarLink' to='/atelier'>Atelier</Link>
      <Link className='NavBarLink' to='/projets'>Projets</Link>
      <Link className='NavBarLink' to='/lab'>LabRusch</Link>
      <Link className='NavBarLink' to='/contact'>Contact</Link>
    </div>

  </div>

export default Nav
