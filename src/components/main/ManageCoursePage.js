import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
  constructor (props,context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},  
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course)})
    }
  }

  updateCourseState(e) {
    const field = e.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = e.target.value;
    return this.setState({course: course});
    console.log('up', field)
  }

  saveCourse(e) {
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course)
    this.props.history.push('/courses')

  }

  render () {
    return (
      <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
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
  let course = { id: '', wathHref: '', title: '', authorId: '', length: '', category: ''};

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)