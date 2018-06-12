import React, { Component } from 'react'
import Filter from './Filter.js'
import { store } from '../store.js'
import './css/Filter.css'

class FiltersSection extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    const { filters } = this.state.app

    const { pageActive } = this.state

    console.log(pageActive)

    const filtersNames = filters
      .filter(filter => filter.section === pageActive)
      .map(filter => <Filter filter={filter} />)

    return (
      <div className="FiltersSection">
        {filtersNames}
      </div>
    )
  }
}

export default FiltersSection
