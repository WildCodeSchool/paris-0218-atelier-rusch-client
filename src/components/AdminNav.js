import React from 'react'
import { Link } from '@reach/router'
import Logo from './img/logo-rusch-noir.png'
import './css/Nav.css'

const AdminNav = () =>
  <div className="NavBar">
    <div className='Logo'>
      <Link to='/Homepage'>
        <button className='HomeLink' value='Home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo}/>
        </button>
      </Link>
    </div>
    <div className="NavBarLinksContainer">
      <Link to='articles' label='Articles'> Articles </Link>
      <Link to='equipe' label='Equipe'> Equipe</Link>
      <Link to='partenaires' label='Partenaires'> Partenaires </Link>
      <Link to='filtres' label='Filtres'> Filtres</Link>
    </div>
  </div>

export default AdminNav
