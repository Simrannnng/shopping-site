import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().required('Town/City is required'),
  phone: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email Address is required'),
});

export default validationSchema;
