import React, { Component } from 'react'
import { store } from '../store'
import LabBlock from './LabBlock.js'

class Homepage extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  render () {
    const articles = this.state.articles.filter(article => article.section === 'lab').map(article =>
      <LabBlock key={article.id} article={article} />
    )
    return (
      <div>
        {articles}
      </div>
    )
  }
}

export default Homepage
