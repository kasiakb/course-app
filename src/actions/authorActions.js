// import * as types from '../actions/actionTypes';
// import AuthorApi from '../api/mockAuthorApi';

// export function loadAuthorseSuccess(authors) {
//   return {type: types.LOAD_AUTHORS_SUCCESS, authors};
// }

// export function loadAuthors() {
//   return dispatch => {
//     return AuthorApi.getAllAuthors().then(authors => {
//       dispatch(loadAuthorseSuccess(authors));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }