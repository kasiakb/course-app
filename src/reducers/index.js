import {combineReducers} from 'redux';
import courses from './courseReducer';
import visibility from './visibilityReducer'

const rootreducer = combineReducers({
  courses,
  visibility
});

export default rootreducer;