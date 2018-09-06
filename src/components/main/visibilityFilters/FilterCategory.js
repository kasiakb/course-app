import React from 'react'
import FilterButton from './FilterButton'

const FilterCategory = ({categories}) => (
  <div>
    <h2>Show courses by category: </h2>
    <FilterButton filter='SHOW_ALL' name="category">All</FilterButton>
    {categories.map(category => <FilterButton key={category} filter={category} name="category">{category}</FilterButton>)}
  </div>
)

export default FilterCategory