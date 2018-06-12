import React from 'react'
import Filter from './Filter.js'
import './css/Filter.css'

const FiltersSection = (props) => {

  const { filters } = this.state.filters

  // const { pageActive } = this.state

  console.log(this.state.articles.pageActive)

  const filtersNames = filters
    .filter(filter => filter.section === this.state.articles.pageActive)
    .map(filter => <Filter filter={filter} />)

  return (
    <div className="FiltersSection">
      {filtersNames}
    </div>
  )
}

export default FiltersSection
