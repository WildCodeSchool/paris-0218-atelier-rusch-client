import React, { Component } from 'react'
import { navigate } from '@reach/router'
import api from '../api.js'
import Logo from './img/logo-rusch-noir.png'

class AdminLogin extends Component {

  state = {
    username: '',
    password: '',
    errorPost: ''
  }

  handleChange = event => {
    const key = event.target.name
    this.setState({ ...this.state.filtre, [key]: event.target.value, errorPost: '' })
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault()
    api.loginUser(this.state)
      .then(() => {
        this.props.login()
        navigate('/admin')
      })
      .catch(err => {
        console.log('Wrong creds!', err)
        this.setState({ ...this.state, errorPost: 'Mauvais identifiants !' })
      })
  }

  render() {
    return (
      <header className='AdminHomeContainer'>
        <div className='AdminLoginLogoBlock'><img className='LogoImg' src={Logo} alt='logo-rusch' /></div>
        <form className='LogInForm' onSubmit={this.handleSubmit}>
          <div className="AdminTitles yellow LogInTitle">Entrez vos identifiants</div>
          <label>Username :<br/>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>Password:<br/>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input className='submit' type="submit" value="Submit" />
          <div className='errorPost'>{this.state.errorPost}</div>
        </form>
      </header>
    )
  }
}

export default AdminLogin
