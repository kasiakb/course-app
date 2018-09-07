import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import FormValidation from './FormValidation'

class ManageCoursePage extends Component {
  constructor (props,context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},  
    };

    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course)})
    }
  }

  async saveCourse(values) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    await sleep(500);
    this.props.actions.saveCourse(values)
    this.props.history.push('/courses')
  }

  render () {
    return (
      <FormValidation
        onSave={this.saveCourse}
        initialValues={this.state.course}
      />
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if(course.length) return course[0]
  return null;

}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id;
  let course = { id: '', watchHref: '', title: '', author: '', length: '', category: ''};

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }

  return {
    course: course,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)