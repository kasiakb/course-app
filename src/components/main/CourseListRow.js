import React from 'react';
import {Link} from 'react-router-dom';

const CourseListRow = ({course, deleteCourse}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.caregory}</td>
      <td>{course.length}</td>
      <td>
        <input
          type='submit'
          name={course.id}
          value="Delete"
          className='btn btn-primary'
          onClick={deleteCourse}
        />
        </td>
    </tr>
  );
};

export default CourseListRow;