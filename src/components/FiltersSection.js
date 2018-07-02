import React from 'react'
import Filter from './Filter.js'
import './css/Filter.css'
import store from '../store.js'

const FiltersSection = () => {
  const state = store.getState()

  const filtersNames = state.filters.allFilters
    .filter(filter => filter.section === state.router.pageActive)
    .map((filter, i) => <Filter key={i} filter={filter} articles={state.articles.allArticles} />)

  return (
    <div className="FiltersSection">
      {filtersNames}
    </div>
  )
}

export default FiltersSection
