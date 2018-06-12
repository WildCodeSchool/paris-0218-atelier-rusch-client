import React from 'react'
import Filter from './Filter.js'
import './css/Filter.css'

const FiltersSection = ({ data }) => {

  console.log(data, 'array ?')

  const filtersNames = data.filters.filters
    .filter(filter => filter.section === data.router.pageActive)
    .map(filter => <Filter filter={filter} />)

  return (
    <div className="FiltersSection">
      {filtersNames}
    </div>
  )
}

export default FiltersSection
