import * as types from '../actions/actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSsuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSsuccess(courses))
    }).catch(error => {
      throw(error);
    });
  };
}