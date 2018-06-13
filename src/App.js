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


  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    // fetch('.../articles')
    //   .then(res => res.json())
    //   .then(articles => store.dispatch(loadArticles(articles)))
    store.dispatch(loadArticles(fetchedArticles))
    store.dispatch(loadFilters(fetchedFilters))

  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = store.getState()

    return (
      <div className="App">
        <Nav />
        <div className="spacer"></div>
        {views[state.router.pageActive](state)}
      </div>
    )
  }
}

export default App
