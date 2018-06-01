import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import './App.css'

class App extends Component {
  state = {
    pageActive: 'home'
  }

setActivePage = (event) => this.setState({pageActive: event.target.value})

render () {
  if (this.state.pageActive === 'home') {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Homepage />
      </div>
    )
  } else if (this.state.pageActive === 'Atelier') {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Atelier />
      </div>
    )
  } else if (this.state.pageActive === 'Projets') {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Projets />
      </div>
    )
  } else if (this.state.pageActive === 'LabRusch') {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <LabRusch />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        <Contact />
      </div>
    )
  }
}
}

export default App
    // fetch(`http://localhost:3003/homepage`)
    //   .then(data => data.json())
    //   .then(fanchon => console.log(fanchon))
    //   .catch(console.error)
