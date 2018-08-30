import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../../../actions/visibilityActions'

const FilterButtons = () => (
  <div>
    <h2>Show courses: </h2>
    <FilterLink
      filter={VisibilityFilters.SHOW_ALL}
    >
      All
    </FilterLink>
    <FilterLink
      filter={VisibilityFilters.SHOW_ACTIVE}
    >
      To Repeat
    </FilterLink>
    <FilterLink
      filter={VisibilityFilters.SHOW_COMPLETED}
    >
      Completed
    </FilterLink>
  </div>
)

export default FilterButtons