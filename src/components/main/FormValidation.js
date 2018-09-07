import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {RenderField} from './../forms/RenderField';
import {connect} from "react-redux";
import {validate} from "./InputValidation"


const FormValidation = props => {
  const {handleSubmit, pristine, reset, submitting, onSave} = props
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <Field name='title' label="Title" type="text" component={RenderField} className="form-control"/>
      <Field name='author' label="Author" type="text" component={RenderField} className="form-control"/>
      <Field name='watchHref' label="Link to course" type="text" component={RenderField} className="form-control"/>
      <Field name='category' label="Category" type="text" component={RenderField} className="form-control"/>
      <Field name='length' label="Length" type="text" component={RenderField} className="form-control"/>
      <div>
        <button type="submit" className='btn btn-primary' disabled={pristine || submitting}>
          Save
        </button>
        <button type="button" className='btn btn-primary' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )

}

export default reduxForm({
    form:'FormValidation',
    validate,
    enableReinitialize : true
  })(FormValidation)
