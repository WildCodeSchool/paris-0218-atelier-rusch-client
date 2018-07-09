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
      .then(result => {
        if (result.ok) {
          this.props.login()
          navigate('/admin/dashboard')
        } else {
          const error = Error(`Fetch: of Sign in, ${result.status} - ${result.statusText}`)
          error.response = result
          console.log('Wrong creds!')
          return true
        }
      })


  }

  render() {
    return (
      <header>
        <div>
          <h3>
            <Link to="/admin/login">
              LOGIN
            </Link>
          </h3>
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
          </div>
        </div>
      </header>
    )
  }
}

export default AdminLogin
