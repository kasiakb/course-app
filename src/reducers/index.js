import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootreducer = combineReducers({
  courses
});

export default rootreducer;