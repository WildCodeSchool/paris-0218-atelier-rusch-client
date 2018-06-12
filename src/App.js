import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import './components/css/App.css'

import { store } from './store'
import { loadArticles, loadFilters } from './actions'

// TODO: rm
import fetchedArticles from './mocks/articles.json'
import fetchedFilters from './mocks/filters.json'

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

  componentDidMount = () => {
    // fetch('.../articles')
    //   .then(res => res.json())
    //   .then(articles => store.dispatch(loadArticles(articles)))

    store.dispatch(loadArticles(fetchedArticles))
    store.dispatch(loadFilters(fetchedFilters))
  }

  render () {
    console.log({state: this.state})

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
