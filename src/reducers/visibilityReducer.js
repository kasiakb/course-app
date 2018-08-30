import { VisibilityFilters } from '../actions/visibilityActions'
import initialState from './initialState';

const visibilityFilter = (state = initialState.visibility, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter