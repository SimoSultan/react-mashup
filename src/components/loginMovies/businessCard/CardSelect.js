import React from 'react'
import { useField } from 'formik'
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const states = [
  {
    value: 'QLD',
  },
  {
    value: 'NSW',
  },
  {
    value: 'VIC',
  },
  {
    value: 'TAS',
  },
  {
    value: 'SA',
  },
  {
    value: 'NT',
  },
  {
    value: 'WA',
  },
  {
    value: 'ACT',
  },
];

const CardSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        select
        style={{width: '100%'}}
        label={label}
        {...field} {...props}
      >
        {states.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};

export default CardSelect