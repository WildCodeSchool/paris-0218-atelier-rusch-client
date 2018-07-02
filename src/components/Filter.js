import React from 'react'
import './css/Filter.css'
import store from '../store.js'
import { toggleFilters } from '../actions.js'

const Filter = ({ filter, articles }) => {
  const toggleFiltersAndFilterArticles = () => {
    store.dispatch(toggleFilters(filter.id))
  }
  return (
    <button className={filter.isActive ? 'Filter FilterActive' : 'Filter'} onClick={ event => toggleFiltersAndFilterArticles()}>
      <h6>{filter.filterTag}</h6>
    </button>
  )
}

export default Filter
