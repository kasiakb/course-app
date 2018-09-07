import React from 'react';


export const RenderField = ({ name, onChange, input, label, meta: { touched, error, warning }, className}) => (
  
  
  <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input {...input} placeholder={label} type='text' name={name} className={className}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)