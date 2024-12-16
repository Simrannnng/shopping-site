import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { Box, Typography, Checkbox, FormControlLabel, Radio, FormControl, RadioGroup, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../Store/formSlice';
import CartTotalComponent from '../../Components/Card-Total/cartTotal';
import payment from '../../Assets/Png/Frame 834.png';
import TextField from '../../Components/Textfield/textfield';
import validationSchema from '../../Utils/Validation/index';
import CouponComponent from '../../Components/Coupon/coupon'
import { CartContext } from '../Context/context';

const BillingForm = () => {
  const dispatch = useDispatch();
  const { cartItems, clearCart } = useContext(CartContext);
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const coupons = {
    SAVE10: 0.1, 
    FLAT50: 50,  
  };

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
      const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const cartTotal = discount < 1 ? subtotal - subtotal * discount : subtotal - discount;

      const orderDetails = { ...values, subtotal, cartTotal };
      localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
      dispatch(saveFormData(values));

      alert('Order Placed Successfully! Check Local Storage for details.');
      clearCart(); 
    },
  });
  const handleApplyCoupon = (code) => {
    const discountValue = coupons[code.toUpperCase()];
    if (discountValue) {
      setDiscount(discountValue);
      setError("");
    } else {
      setError("Invalid Coupon Code");
      setDiscount(0);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
        padding: '20px',
        marginTop: { lg: "180px", md: "160px", sm: "160px", xs: "170px" },
        marginLeft: { lg: "70px", },
      }}
    >
      {/* Form Section */}
      <Box sx={{ flex: 1, maxWidth: { lg: 600, md: 400, sm: "100%" }, padding: 1, textAlign: 'left' }}>
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
          <Button type="submit" variant="contained" color="error" sx={{ marginTop: "30px" }}>
            Place Order
          </Button>
        </form>
      </Box>

      {/* Cart Items Section */}
      <Box sx={{ flex: 1, maxWidth: { lg: "400px", md: "400px", sm: "100%" }, padding: 1, marginTop: { lg: "80px", md: "100px" }, marginLeft: { lg: "200px", md: "100px" } }}>
        <Typography variant="h5" sx={{ marginBottom: '20px', marginLeft: "10px" }}>Your Cart:</Typography>
        {cartItems?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              marginBottom: '10px',
              gap: '10px',
            }}
          >
            {/* Image and Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', marginLeft: { lg: "15px" } }} />
              <Typography>{item.name}</Typography>
            </Box>
            {/* Price */}
            <Typography sx={{ textAlign: 'right', fontWeight: 'bold' }}>${item.price}</Typography>
          </Box>
        ))}
        <CartTotalComponent cartItems={cartItems} discount={discount} sx={{ marginLeft: '0px !important', marginTop: "30px !important ", width: "380px !important", marginRight: "50px" }} hideCheckoutButton />

        {/* Payment Method Section */}
        <FormControl sx={{ marginTop: "-10px", marginLeft: { lg: "15px", md: "20px" } }}>
          <RadioGroup>
            <FormControlLabel
              value="bank"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { lg: 24, md: 23 } }}>
                  Bank
                  <img src={payment} alt="Payment Methods" style={{ height: '20px' }} />
                </Box>
              }
            />
            <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
          </RadioGroup>

        </FormControl>

        <CouponComponent
          error={error}
          onApplyCoupon={handleApplyCoupon}
          sx={{
            marginTop: "20px",
            marginRight: "20px",
            marginLeft: "20px",
          }}
          buttonSx={{
            width: "150px"
          }} />


      </Box>


    </Box>
  );
};

export default BillingForm;
