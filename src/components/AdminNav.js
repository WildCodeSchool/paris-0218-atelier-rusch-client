import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
import NavLink from './NavLink.js'
import Logo from './img/logo-rusch-noir.png'


const AdminNav = ({onPageChange}) =>
  <div className="NavBar">

    <div className='Logo'>
      <Link to='/Homepage'>
        <button className='HomeLink' value='Home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo}/>
        </button>
      </Link>
    </div>

    <div className="NavBarLinksContainer">
      <NavLink to='AdminArticles' label='Articles' />
      <NavLink to='AdminEquipe' label='Equipe' />
      <NavLink to='AdminPartenaires' label='Partenaires' />
      <NavLink to='AdminFiltres' label='Filtres' />
    </div>

  </div>

export default AdminNav
