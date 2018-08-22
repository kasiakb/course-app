import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootreducer = combineReducers({
  courses,
  authors
});

export default rootreducer;