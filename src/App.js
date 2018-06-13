import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import ArticleForm from './components/ArticleForm.js'
import './App.css'

import store from './store'
import { loadArticles, loadFilters } from './actions'

// TODO: rm
import fetchedArticles from './mocks/articles.json'
import fetchedFilters from './mocks/filters.json'

const views = {
  home: Homepage,
  atelier: Atelier,
  projets: Projets,
  lab: LabRusch,
  contact: Contact,
  articleForm: ArticleForm
}

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount = () => {
    // fetch('.../articles')
    //   .then(res => res.json())
    //   .then(articles => store.dispatch(loadArticles(articles)))
    // this.unsubscribe = store.subscribe(() => this.forceUpdate())
    store.dispatch(loadArticles(fetchedArticles))
    store.dispatch(loadFilters(fetchedFilters))

  }

  render () {
    return (
      <div className="App">

        <Nav />

        <div className="spacer"></div>

        {views[this.state.router.pageActive](this.state)}

      </div>
    )
  }
}

export default App
