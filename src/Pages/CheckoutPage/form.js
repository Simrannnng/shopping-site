import React from 'react';
import { useFormik } from 'formik';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useLocation } from "react-router-dom";
import CartTotalComponent from '../../Components/Card-Total/cartTotal';

import TextField from '../../Components/Textfield/textfield';
import validationSchema from '../../Utils/Validation/index';

const BillingForm = () => {
  const location = useLocation();
  const { cartItems } = location.state || {};

  const formik = useFormik({
    initialValues: {
      firstName: '',
      companyName: '',
      streetAddress: '',
      apartment: '',
      city: '',
      phone: '',
      email: '',
      saveInfo: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form Values:', values);
    },
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' }, padding: '20px', marginTop: { lg: "180px", md: "160px", sm: "160px", xs: "170px" }, marginLeft: { lg: "70px" } }}>

      {/* Form Section */}
      <Box sx={{ flex: 1, maxWidth: { lg: 600, md: 400, sm: 330 }, padding: 1, textAlign: 'left' }}>
        <Typography sx={{ marginBottom: "50px" }}>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>Account</span>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>/</span>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>My Account</span>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>/</span>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>Product</span>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>/</span>
          <span style={{ color: '#B0B0B0', marginRight: '10px' }}>View Cart</span>
          <span style={{ color: '#000000', marginRight: '10px', fontWeight: 'bold' }}> / CheckOut</span>
        </Typography>

        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Billing Details
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField label="First Name" name="firstName" formik={formik} required={true} />
          <TextField label="Company Name" name="companyName" formik={formik} required={true} />
          <TextField label="Street Address" name="streetAddress" formik={formik} required={true} />
          <TextField label="Apartment, floor, etc. (optional)" name="apartment" formik={formik} required={false} />
          <TextField label="Town/City" name="city" formik={formik} required={true} />
          <TextField label="Phone Number" name="phone" formik={formik} required={true} />
          <TextField label="Email Address" name="email" formik={formik} required={true} />
          <FormControlLabel
            control={<Checkbox name="saveInfo" color="primary" checked={formik.values.saveInfo} onChange={formik.handleChange} />}
            label="Save this information for faster check-out next time"
          />
        </form>
      </Box>

      {/* Cart Items Section */}
      {/* Cart Items Section */}
      <Box sx={{ flex: 1, maxWidth: '400px', padding: 1, marginTop: "80px", marginLeft: { lg: "200px" } }}>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>Your Cart:</Typography>
        {cartItems?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              marginBottom: '10px',
              gap: '10px'
            }}
          >
            {/* Image and Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              <Typography>{item.name}</Typography>
            </Box>
            {/* Price */}
            <Typography sx={{ textAlign: 'right', fontWeight: 'bold' }}>${item.price}</Typography>
          </Box>
        ))}
        <CartTotalComponent cartItems={cartItems} sx={{ marginLeft: '0px !important', marginTop: "30px !important ", width: "390px !important", marginRight: "50px" }} hideCheckoutButton />

      </Box>
    </Box>
  );
};

export default BillingForm;
