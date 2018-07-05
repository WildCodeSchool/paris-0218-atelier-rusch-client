import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
import Logo from './img/logo-rusch-noir.png'

const Nav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <Link to='/homepage'>
        <button className='HomeLink' value='Home'>
          <img style={{ width: '75px' }} src={Logo} alt='logo-rusch-noir' />
        </button>
      </Link>
    </div>

    <div className="NavBarLinksContainer">
      <Link className={window.location.pathname === '/atelier' ? 'NavBarLink active' : 'NavBarLink'} to='/atelier'>Atelier</Link>
      <Link className={window.location.pathname === '/projets' ? 'NavBarLink active' : 'NavBarLink'} to='/projets'>Projets</Link>
      <Link className={window.location.pathname === '/lab' ? 'NavBarLink active' : 'NavBarLink'} to='/lab'>LabRusch</Link>
      <Link className={window.location.pathname === '/contact' ? 'NavBarLink active' : 'NavBarLink'} to='/contact'>Contact</Link>
    </div>

  </div>

export default Nav
