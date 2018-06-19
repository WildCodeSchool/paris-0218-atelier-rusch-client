import React from 'react'
import './css/Filter.css'
import store from '../store.js'
import { filterArticles } from '../actions.js'

const Filter = ({ filter, getProjetsArticles }) => {
  return (
    <button className="Filter" onClick={event => store.dispatch(filterArticles(getProjetsArticles, filter.filterTag))}>
      <h6>{filter.filterTag}</h6>
    </button>
  )
}

export default Filter
