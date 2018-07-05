import React from 'react'
import { Link } from '@reach/router'
import Logo from './img/logo-rusch-noir.png'
import './css/Nav.css'

const AdminNav = () =>
  <div className="NavBar">
    <div className='Logo'>
      <Link to='/'>
        <button className='HomeLink' value='home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo} alt='logo-rusch-noir' />
        </button>
      </Link>
    </div>
    <div className="NavBarLinksContainer">
      <Link className='NavBarLink' to='' label='Articles'> Administration </Link>
      <Link className='NavBarLink' to='articles' label='Articles'> Articles </Link>
      <Link className='NavBarLink' to='filtres' label='Filtres'> Filtres</Link>
      <Link className='NavBarLink' to='equipe' label='Equipe'> Equipe</Link>
      <Link className='NavBarLink' to='partenaires' label='Partenaires'> Partenaires </Link>
    </div>
  </div>

export default AdminNav
