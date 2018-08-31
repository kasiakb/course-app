import React from 'react';
import TextInput from '../forms/TextInput';
// import UrlInput from '../forms/UrlInput';
import { Form, Field } from 'react-final-form';

const CourseForm = ({course, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name='title'
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name='author'
        label="Author"
        value={course.author}
        onChange={onChange}
        error={errors.author}/>

      <TextInput
        name='watchHref'
        label="Link to course"
        value={course.watchHref}
        onChange={onChange}
        error={errors.wathHref}/>

      <TextInput
        name='category'
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name='length'
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type='submit'
        disable={loading}
        value={loading ? 'Saving...' : 'Save'}
        className='btn btn-primary'
        onClick={onSave}/>
    </form>
  );
};

export default CourseForm;