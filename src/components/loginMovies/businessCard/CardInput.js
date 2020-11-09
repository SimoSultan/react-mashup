import React from 'react'
import { useField } from 'formik'
import TextField from '@material-ui/core/TextField';

const CardInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <TextField label={label} {...field} {...props}/>
      {meta.touched && meta.error 
        ? (<div className="error">{meta.error}</div>) 
        : null
      }
    </>
  );
};

export default CardInput