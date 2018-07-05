import React, { Component } from 'react'
import { AuthConsumer } from '../helpers/AuthContext'
import { Link } from '@reach/router'
import api from '../api.js'

class Header extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value })
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)

    api.loginUser(this.state)

  }

  render() {
    return(
  <header>
    <AuthConsumer>

    {({ isAuth, login, logout }) => (
           <div>
             <h3>
               <Link to="/admin/login">
                 HOME
               </Link>
             </h3>
             {isAuth ? (
               <ul>

                 <Link to="/admin/dashboard">
                   Dashboard
                 </Link>
                 <button onClick={logout}>
                   logout
                 </button>
               </ul>
             ) : (
             <div>
                <form onSubmit={this.handleSubmit}>
                  <label>Username :<br/>
                  <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                  </label>
                  <label>Password:<br/>
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </label>

                  <input type="submit" value="Submit" />
                </form>
               <button onClick={login}>login</button>
               </div>
             )}
           </div>
         )}

    </AuthConsumer>
  </header>
)}
  }

export default Header
