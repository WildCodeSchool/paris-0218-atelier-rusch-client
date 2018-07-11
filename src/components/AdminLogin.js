import React, { Component } from 'react'
import { AuthConsumer } from '../helpers/AuthContext'
import { Link, navigate } from '@reach/router'
import api from '../api.js'


class AdminLogin extends Component {

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
      .then(() => {
        this.props.login()
        navigate('/admin/dashboard')
      })
      .catch(err => {
        console.log('Wrong creds!', err)
        // show error message on client
      })
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <div className="AdminTitles yellow" style={{ textAlign: 'center', marginBottom: '4rem' }}>Entrez vos identifiants</div>
          <label>Username :<br/>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>Password:<br/>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input style={{ marginBottom: '7rem' }} type="submit" value="Submit" />
        </form>
      </header>
    )
  }
}

export default AdminLogin
