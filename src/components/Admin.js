import React, { Component } from 'react'
import { Router } from '@reach/router'
import AdminFiltres from './AdminFiltres.js'
import AdminNav from './AdminNav.js'
import AdminArticles from './AdminArticles.js'
import AdminPartenaires from './AdminPartenaires.js'
import { AdminNewArticle, AdminEditArticle } from './AdminArticle.js'
import { AdminNewFiltre, AdminEditFiltre } from './AdminFiltre.js'
import { AdminNewPartenaire, AdminEditPartenaire } from './AdminPartenaire.js'
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

    api.getPartenaires()
      .then(partenaires => this.setState({ partenaires: partenaires }))
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
          <AdminPartenaires path='partenaires' partenaires={this.state.partenaires} />
          <AdminNewPartenaire path='partenaires/new' />
          <AdminEditPartenaire path='partenaires/:partenaireId' partenaires={this.state.partenaires} />
        </Router>
      </div>
    )
  }
}

export default Admin
