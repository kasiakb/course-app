import * as types from '../actions/actionTypes';

export function setVisibilityFilter(filter, name) {
  return {type: types.SET_VISIBILITY_FILTER, filter, name};
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}