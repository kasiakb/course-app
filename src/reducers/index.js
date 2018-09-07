import {combineReducers} from 'redux';
import courses from './courseReducer';
import visibility from './visibilityReducer';
import { reducer as formReducer } from 'redux-form'

const rootreducer = combineReducers({
  courses,
  visibility,
  form: formReducer,
});

export default rootreducer;
