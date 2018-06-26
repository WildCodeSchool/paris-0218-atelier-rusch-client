import React from 'react'
import './css/Nav.css'
import store from '../store.js'
import { setActivePage } from '../actions.js'

const NavLink = ({ label }) =>

  <button className='NavBarLink' value={label}
    onClick={event => store.dispatch(setActivePage(event.target.value))}>
    {label}
  </button>

export default NavLink
