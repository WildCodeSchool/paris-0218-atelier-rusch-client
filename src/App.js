import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import { store } from './store'
import './components/css/App.css'

const views = {
  home: <Homepage />,
  atelier: <Atelier />,
  projets: <Projets />,
  lab: <LabRusch />,
  contact: <Contact />
}

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  setActivePage = (event) => this.setState({ pageActive: event.target.value })

  render () {

    const GetNavBar = document.getElementById('NavBar')
    console.log(GetNavBar)

    return (
      <div className="App">

        <Nav onPageChange = {this.setActivePage} />

        <div className="spacer"></div>

        {views[this.state.pageActive]}

      </div>
    )
  }
}

export default App
