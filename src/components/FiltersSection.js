import React from 'react'
import './css/FiltersSection.css'
// import { actions } from '../store'

const Filter = ({ filter }) => {

  return (
    <button className="Filter">
      {filter.filterTag}
    </button>
  )
}

export default Filter
