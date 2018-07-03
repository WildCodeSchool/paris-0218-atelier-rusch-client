import React, { Component } from 'react'
import { Router } from '@reach/router'
import ArticleForm from './components/ArticleForm'

import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import Footer from './components/Footer.js'
import Admin from './components/Admin.js'
import './App.css'

import store from './store'
import { loadArticles, loadFilters, loadMembers } from './actions'

class App extends Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())

    fetch('http://localhost:3456/articles')
      .then(res => res.json())
      .then(articles => store.dispatch(loadArticles(articles)))

    fetch('http://localhost:3456/filters')
      .then(res => res.json())
      .then(filters => store.dispatch(loadFilters(filters)))

    fetch('http://localhost:3456/equipe')
      .then(res => res.json())
      .then(members => store.dispatch(loadMembers(members)))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Homepage path='/Homepage' />
          <Homepage path='/Homepage/:articleId' />
          <Atelier path='/Atelier' />
          <Projets path='/Projets' />
          <Projets path='/Projets/:articleId' />
          <LabRusch path='/LabRusch' />
          <LabRusch path='/LabRusch/:articleId' />
          <Contact path='/Contact' />
          <ArticleForm path='/ArticleForm' />
          <Admin path='/Admin' />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
