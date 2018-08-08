import {createStore, applyMiddleware} from 'redux';
import rootreducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialState) {
  return createStore(
    rootreducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}