import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { BrowserRouter} from 'react-router-dom'
import FilterCompleted from './visibilityFilters/FilterCompleted';
import FilterCategory from './visibilityFilters/FilterCategory';
import { VisibilityFilters } from '../../actions/visibilityActions';

class CoursesPage extends Component {
  constructor (props,context) {
    super(props, context);
  
    this.redairectToAddCoursePage = this.redairectToAddCoursePage.bind(this)
    this.deleteCourses = this.deleteCourses.bind(this)
    this.completedCourse = this.completedCourse.bind(this)
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  redairectToAddCoursePage() {
    this.props.history.push('/course')
  }

  deleteCourses(e) {
    const courseId = e.target.name;
    this.props.actions.deleteCourse(courseId)
  }

  completedCourse(e) {
    const courseId = e.target.name;
    this.props.actions.completedCourse(courseId)
  }

  render () {
    const {courses} = this.props;
    return (
        <div>
          <h1>Courses</h1>
          <input 
            type='submit'
            value='Add Course'
            className='btn btn-primary'
            onClick={this.redairectToAddCoursePage}
            />
          <FilterCompleted/>
          <FilterCategory
            categories = {this.props.categories}
          />
          <CourseList
            courses={courses}
            deleteCourse={this.deleteCourses}
            completedCourse={this.completedCourse}
          />
        </div>
    );
  }
}



function mapStateToProps(state, ownProps) {
  const getVisibleCourses = (courses, filter) => {

    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return courses
      case VisibilityFilters.SHOW_COMPLETED:
        return courses.filter(course => course.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return courses.filter(course => !course.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

  const getVisibleCourses2 = (courses, filter) => {
    if(filter === 'SHOW_ALL') {
      return courses
    } else {
      return courses.filter(course => course.category === filter)
    }
  }

  return {
    courses: getVisibleCourses2( getVisibleCourses(state.courses, state.visibility.completed), state.visibility.category),
    visibility: state.visibility,
    categories: state.courses.map(course => course.category),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)