import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { BrowserRouter} from 'react-router-dom'

class CoursesPage extends Component {
  constructor (props,context) {
    super(props, context);

    this.redairectToAddCoursePage = this.redairectToAddCoursePage.bind(this)
  }
  

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  redairectToAddCoursePage() {
    this.props.history.push('/course')
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
          <CourseList courses={courses}/>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)