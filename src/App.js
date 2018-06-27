import React, { Component } from 'react'
import { Router } from '@reach/router'

import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import ArticleForm from './components/ArticleForm.js'
import CarouselForm from './components/CarouselForm.js'
import Modale from './components/Modale.js'
import './App.css'

import store from './store'
import { loadArticles, loadFilters, loadSlides } from './actions'

// const views = {
//   Home: Homepage,
//   Atelier: Atelier,
//   Projets: Projets,
//   LabRusch: LabRusch,
//   Contact: Contact,
//   articleForm: ArticleForm,
//   CarouselForm: CarouselForm,
//   Modale: Modale
// }

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount () {
    // this.unsubscribe = store.subscribe(() => this.forceUpdate())
    fetch('http://localhost:3456/articles')
      .then(res => res.json())
      .then(articles => store.dispatch(loadArticles(articles)))
    fetch('http://localhost:3456/homepage')
      .then(res => res.json())
      .then(slides => store.dispatch(loadSlides(slides)))
    fetch('http://localhost:3456/filters')
      .then(res => res.json())
      .then(filters => store.dispatch(loadFilters(filters)))
  }

  // componentWillUnmount () {
  //   this.unsubscribe()
  // }

  render () {
    return (
      <div className="App">
      <Nav />
      <div className="spacer"></div>
        <Router>
          <Homepage path='/' />
          <Atelier path='/Atelier' />
          <Projets path='/Projets' />
          <LabRusch path='/LabRusch' />
          <Contact path='/Contact' />
        </Router>
      </div>
    )
  }
}

export default App
