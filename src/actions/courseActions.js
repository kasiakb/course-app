import * as types from '../actions/actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSsuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCESS, course};
}

export function deleteCourseSuccess(courseId) {
  return {type: types.DELETE_COURSES_SUCCESS, courseId};
}

export function completedCourseSuccess(course) {
  return {type: types.COMPLETED_COURSES_SUCCESS, course};
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

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteCourse(courseId) {
  return function (dispatch) {
    dispatch(deleteCourseSuccess(courseId))
    return courseApi.deleteCourse(courseId)
      .catch(error => {
        throw(error);
      }
    );
  };
}

export function completedCourse(courseId) {
  return function (dispatch) {
   return courseApi.completedCourse(courseId).then(completedCourse => {
      dispatch(completedCourseSuccess(completedCourse))
    }).catch(error => {
      throw(error);
    });
  };
}
