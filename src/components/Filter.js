import React from 'react'
import './css/Filter.css'

const Filter = ({ filter }) => {
  return (
    <button className="Filter">
      {filter.filterTag}
    </button>
  )
}

export default Filter
