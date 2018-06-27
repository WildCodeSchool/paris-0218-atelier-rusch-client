import React from 'react'
import { Link } from '@reach/router'
import './css/Nav.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'

const NavLink = ({ label }) =>
  <Link to={`/${label}`}>
    <button className='NavBarLink' value={label}
      onClick={event => store.dispatch(setActivePage(event.target.value))}>
      {label}
    </button>
  </Link>

export default NavLink
