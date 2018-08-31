// import React from 'react';

// const UrlInputs = ({name, label, onChange, placeholder, value, error}) => {
//   let wrapperClass = 'form-group';
//   if (error && error.length >0) {
//     wrapperClass += " " + 'has-error';
//   }

//   return (
//     <div className={wrapperClass}>
//       <label htmlFor={name}>{label}</label>
//       <div className="field">
//         <input
//           type="url"
//           name={name}
//           className="form-control"
//           placeholder="https://course.com"
//           value={value}
//           onChange={onChange}
//           pattern="https://.*"
//           required/>
//           {error && <div className="alert alert-danger">{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default UrlInputs;