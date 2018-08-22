import {createStore, applyMiddleware} from 'redux';
import rootreducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootreducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}