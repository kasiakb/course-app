import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import visibility from './visibilityReducer'

const rootreducer = combineReducers({
  courses,
  authors,
  visibility
});

export default rootreducer;