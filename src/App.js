import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import './App.css'

const views = {
  home: <Homepage />,
  atelier: <Atelier />,
  projets: <Projets />,
  lab: <LabRusch />,
  contact: <Contact />
}

class App extends Component {
  state = {
    pageActive: 'home'
  }

  setActivePage = (event) => this.setState({ pageActive: event.target.value })

  render () {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        {views[this.state.pageActive]}
      </div>
    )
  }
}

export default App
// fetch(`http://localhost:3003/homepage`)
//   .then(data => data.json())
//   .then(fanchon => console.log(fanchon))
//   .catch(console.error)
