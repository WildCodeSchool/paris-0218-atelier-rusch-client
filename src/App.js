import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'


class App extends Component {

  state = {
    pageActive: 'home',
  }

setActivePage = (event) => this.setState({pageActive:event.target.value})

  render () {

  if (this.state.pageActive === 'home')
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Homepage  />
      </div>
    )

  else if (this.state.pageActive === 'Atelier')
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Atelier  />
      </div>
    )

  else if (this.state.pageActive === 'Projets')
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Projets  />
      </div>
    )

  else if (this.state.pageActive === 'LabRusch')
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <LabRusch  />
      </div>
    )

  else (this.state.pageActive === 'Contact')
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Contact  />
      </div>
    )
  }
}

export default App
