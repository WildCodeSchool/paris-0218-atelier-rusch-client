import React, { Component } from 'react'
import { Router } from '@reach/router'
import AdminFiltres from './AdminFiltres.js'
import AdminNav from './AdminNav.js'
import AdminArticles from './AdminArticles.js'
import { AdminNewArticle, AdminEditArticle } from './AdminArticle.js'
import { AdminNewFiltre, AdminEditFiltre } from './AdminFiltre.js'
import api from '../api'

const AdminHome = () => <div>ADMIN</div>

class Admin extends Component {
  state = {
    articles: [],
    filtres: [],
    equipe: [],
    partenaires: []
  }

  syncDatas = () => {
    api.getArticles()
      .then(articles => this.setState({ articles: articles }))

    api.getFilters()
      .then(filtres => this.setState({ filtres: filtres }))

    api.getEquipe()
      .then(equipe => this.setState({ equipe: equipe }))
  }


  componentDidMount () {
    this.syncDatas()
  }

  render () {
    return (
      <div className="App">
        <AdminNav />
        <div className="spacer"></div>
        <Router>
          <AdminHome path='/' />
          <AdminArticles path='articles' articles={this.state.articles} />
          <AdminNewArticle path='articles/new' />
          <AdminEditArticle path='articles/:articleId' articles={this.state.articles} />
          <AdminFiltres path='filtres' filtres={this.state.filtres}/>
          <AdminEditFiltre path='filtres/:filtreId' filtres={this.state.filtres} />
          <AdminNewFiltre path='filtres/new' />
        </Router>
      </div>
    )
  }
}

export default Admin
