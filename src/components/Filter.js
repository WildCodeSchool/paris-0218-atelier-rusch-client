import React from 'react'
import './css/Filter.css'
import store from '../store.js'
import { toggleFilters } from '../actions.js'

const Filter = ({ filter, filtersLength }) => {
  const toggleFiltersAndFilterArticles = () => {
    store.dispatch(toggleFilters(filter.id))
  }
  return (
    <button style={ filtersLength <= 3 ? {width: '33vw'} : {width: '25vw'}}
      className={filter.isActive ? 'Filter FilterActive' : 'Filter'}
      onClick={ event => toggleFiltersAndFilterArticles()}>
      <h6>{filter.filterTag}</h6>
    </button>
  )
}

export default Filter
