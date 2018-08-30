import React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deleteCourse, completedCourse}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
          <th>Delete</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => <CourseListRow key={course.id} course={course} deleteCourse={deleteCourse} completedCourse={completedCourse}/>
        )}
      </tbody>
    </table>
  );
}

export default CourseList;