import React, { Component } from 'react'
import { Link } from '@reach/router'
import Logo from './img/logo-rusch-noir.png'
import { AuthConsumer } from '../helpers/AuthContext'

import './css/Nav.css'

class AdminNav extends Component {

  render(){

    if(window.location.pathname === '/admin/login'){
    return(
      <div>
        <p>
          Login
        </p>
      </div>
  )
  } else {
    return(
  <div className="NavBar">
    <div className='Logo'>
      <Link to='/'>
        <button className='HomeLink' value='home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo} alt='logo-rusch-noir' />
        </button>
      </Link>
    </div>
    <div className="NavBarLinksContainer">
      <Link className='NavBarLink' to='articles' label='Articles'> Articles </Link>
      <Link className='NavBarLink' to='filtres' label='Filtres'> Filtres</Link>
      <Link className='NavBarLink' to='equipe' label='Equipe'> Equipe</Link>
      <Link className='NavBarLink' to='partenaires' label='Partenaires'> Partenaires </Link>
    </div>
  </div>)
  }
  }
}
export default AdminNav
