import React from 'react'
import { Link } from '@reach/router'
import Logo from './img/logo-rusch-noir.png'
import { AuthProvider } from '../helpers/AuthContext'
import Header from './Header'

const AdminLogin = () => (

  <div>
    <AuthProvider>
      <Header />
    </AuthProvider>
  </div>
)



export default AdminLogin


/*    <AuthConsumer>
      {({ isAuth, login, logout }) => (
        <div>
          <h3>
            Salut, ceci est la page de loggin
          </h3>

          {isAuth? (
            <ul>
              <Link to="dashboard">
                Open Dashboard
              </Link>

              <button onClick={logout}>logout</button>
            </ul>
          ) : (
            <button onClick={login}>login</button>
          )}
        </div>
      )}
    </AuthConsumer>*/
