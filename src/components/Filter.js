import React from 'react'
import './css/Filter.css'

const Filter = ({ filter }) => {
  return (
    <button className="Filter">
      <h6>{filter.filterTag}</h6>
    </button>
  )
}

export default Filter
