import React, { Component } from 'react'
import { store } from '../store'
import LabBlock from './LabBlock.js'

class Projets extends Component {
  constructor () {
      super()
      this.state = store.getState()
      store.subscribe(() => {
        this.setState(store.getState())
      })
    }
  render () {
    const articles = this.state.articles.filter(article => article.section === 'project').map(article =>
      <LabBlock key={article.id} article={article} />
    )
    return (
      <div>
        {articles}
      </div>
    )
  }
}

export default Projets
