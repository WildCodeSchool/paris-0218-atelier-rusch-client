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
      <Link to='articles' label='Articles' />
      <Link to='equipe' label='Equipe' />
      <Link to='partenaires' label='Partenaires' />
      <Link to='filtres' label='Filtres' />
    </div>
  </div>

export default AdminNav
