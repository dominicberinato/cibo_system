import React from 'react';
export const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <small className="valid-error">{error}</small>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
