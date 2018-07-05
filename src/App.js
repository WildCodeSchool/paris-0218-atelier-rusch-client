import React, { Component } from 'react'
import { Router } from '@reach/router'

import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import Footer from './components/Footer.js'
import Admin from './components/Admin.js'
import './App.css'
import './components/css/Responsive.css'

import store from './store'
import api from './api'

import { loadArticles, loadFilters, loadMembers } from './actions'

class App extends Component {

  syncDatas = () => {
    api.getArticles()
      .then(articles => store.dispatch(loadArticles(articles)))

    api.getFilters()
      .then(filters => store.dispatch(loadFilters(filters)))

    api.getEquipe()
      .then(members => store.dispatch(loadMembers(members)))
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())

    this.syncDatas()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Homepage path='/' />
          <Homepage path='homepage' />
          <Homepage path='homepage/:articleId' />
          <Atelier path='atelier' />
          <Projets path='projets' />
          <Projets path='projets/:articleId' />
          <LabRusch path='lab' />
          <LabRusch path='lab/:articleId' />
          <Contact path='contact' />
          <Admin path='admin/*' />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
