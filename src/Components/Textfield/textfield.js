import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ label, name, formik, required }) => {
  return (
    <MuiTextField
      fullWidth
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      required={required}
    
      margin="normal"
      sx={{
        backgroundColor: '#F5F5F5', // Light blue background
        borderRadius: 1, // Rounded corners
      }}
      InputLabelProps={{
        shrink: true, // Ensures label stays above the text field
      }}
    />
  );
};

export default TextField;
