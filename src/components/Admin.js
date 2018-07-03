import React, { Component } from 'react'
import { Router } from '@reach/router'
import ArticleForm from './ArticleForm.js'
import AdminArticles from './AdminArticles.js'
import AdminNav from './AdminNav.js'
// import Footer from './Footer.js'
import store from '../store'

class Admin extends Component {
  state = {
    articles: [],
    filtres: [],
    equipe: [],
    partenaires: []
  }

  componentDidMount () {
      this.unsubscribe = store.subscribe(() => this.forceUpdate())

      fetch('http://localhost:3456/articles')
        .then(res => res.json())
        .then(articles => this.setState({ articles: articles }))

      fetch('http://localhost:3456/filters')
        .then(res => res.json())
        .then(filtres => this.setState({ filtres: filtres}))

      fetch('http://localhost:3456/equipe')
        .then(res => res.json())
        .then(equipe => this.setState({ equipe: equipe }))
    console.log(this.state)
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

  render () {

    return (
      <div className="App">
        <AdminNav />
        <div className="spacer"></div>
        <AdminArticles data={this.state.articles}/>
      </div>
    )
  }
}

export default Admin
