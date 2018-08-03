import React, { Component } from 'react';

class CoursesPage extends Component {
  constructor (props,context) {
    super(props, context);

    this.state = {
      course: {title: ''}
    };
  }

  onTitleChange(e) {
    e.preventDefault();
    this.setState({
      course: {title: e.target.value}
    })
  }

  onClickSave(e) {
    // e.preventDefault();
    alert(`Saving ${this.state.course.title}`)
  }

  render () {
    console.log('title', this.state.course.title)
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
        type="text"
        onChange={(e) => this.onTitleChange(e)}
        />

        <button onClick={(e) => this.onClickSave(e)}>
          Save
        </button>

      </div>
    )
  }
}

export default CoursesPage