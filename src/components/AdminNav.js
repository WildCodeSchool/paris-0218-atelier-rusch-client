import React, { Component } from 'react'
import { Link } from '@reach/router'
import Logo from './img/logo-rusch-noir.png'
import LogOut from 'react-icons/lib/io/log-out'
import './css/Nav.css'

class AdminNav extends Component {
  render () {
    return (
      <div className="NavBar" style={{ zIndex: '10000' }}>
        <div className='Logo'>
          <Link to='/'>
            <button className='HomeLink' value='home'>
              <img style={{width: '75px', marginTop: '5px'}} src={Logo} alt='logo-rusch-noir' />
            </button>
          </Link>
        </div>
        <div className="NavBarLinksContainer" style={{ width: '60vw', padding: '0 2rem' }}>
          <Link onClick={() => window.scrollTo(0, 0)} className={window.location.pathname === '/admin/dashboard' ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='/admin' label='Articles'> Administration </Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={window.location.pathname.includes('/admin/articles') ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='articles' label='Articles'> Articles </Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={window.location.pathname.includes('/admin/filtres') ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='filtres' label='Filtres'> Filtres</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={window.location.pathname.includes('/admin/equipe') ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='equipe' label='Equipe'> Équipe</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className={window.location.pathname.includes('/admin/partenaires') ? 'NavBarLinkAdmin active' : 'NavBarLinkAdmin'} to='partenaires' label='Partenaires'> Partenaires </Link>
          <LogOut className='LogOut' onClick={() => this.props.logout()} />
        </div>
      </div>)
  }
}
export default AdminNav
