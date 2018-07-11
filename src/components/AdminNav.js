import React, { Component } from 'react'
import { Link } from '@reach/router'
import Logo from './img/logo-rusch-noir.png'
import { AuthConsumer } from '../helpers/AuthContext'
import LogOut from 'react-icons/lib/io/log-out'
import './css/Nav.css'

class AdminNav extends Component {

  render(){
    return(
  <div className="NavBar" style={{ zIndex: '10000' }}>
    <div className='Logo'>
      <Link to='/'>
        <button className='HomeLink' value='home'>
          <img style={{width: '75px', marginTop: '5px'}} src={Logo} alt='logo-rusch-noir' />
        </button>
      </Link>
    </div>
    <div className="NavBarLinksContainer" style={{ width: '60vw', padding: '0 2rem' }}>
      <Link className={window.location.pathname === '/admin/dashboard' ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='dashboard' label='Articles'> Administration </Link>
      <Link className={window.location.pathname === '/admin/articles' ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='articles' label='Articles'> Articles </Link>
      <Link className={window.location.pathname === '/admin/filtres' ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='filtres' label='Filtres'> Filtres</Link>
      <Link className={window.location.pathname === '/admin/equipe' ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='equipe' label='Equipe'> Equipe</Link>
      <Link className={window.location.pathname === '/admin/partenaires' ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='partenaires' label='Partenaires'> Partenaires </Link>
      <LogOut className='LogOut' onClick={()=>this.props.logout()} />
    </div>
  </div>)
  }
}
export default AdminNav
