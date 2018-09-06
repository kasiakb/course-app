import React from 'react'
import FilterButton from './FilterButton'
import { VisibilityFilters } from '../../../actions/visibilityActions'

const FilterCompleted = () => (
  <div>
    <h2>Show courses: </h2>
    <FilterButton
      filter={VisibilityFilters.SHOW_ALL}
      name="completed"
    >
      All
    </FilterButton>
    <FilterButton
      filter={VisibilityFilters.SHOW_ACTIVE}
      name="completed"
    >
      To Repeat
    </FilterButton>
    <FilterButton
      filter={VisibilityFilters.SHOW_COMPLETED}
      name="completed"
    >
      Completed
    </FilterButton>
  </div>
)

export default FilterCompleted