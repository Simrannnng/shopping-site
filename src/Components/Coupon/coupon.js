import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const CouponComponent = ({ sx = {}, buttonSx = {}, onApplyCoupon, error }) => {
  const [couponCode, setCouponCode] = useState("");

  const handleInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyClick = () => {
    if (onApplyCoupon) {
      onApplyCoupon(couponCode);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "20px",
        marginLeft:"66px",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={handleInputChange}
          sx={{
            width: { lg: "230px", md: "220px", sm: "200px", xs: "200px" },
            marginRight: "10px",
            "& .MuiInputBase-input": {
              height: "25px",
              padding: "10px",
            },
          }}
        />
        <Button
          variant="contained"
          color="error"
          onClick={handleApplyClick}
          sx={{
            width: { lg: "150px", md: "130px", sm: "122px", xs: "120px" },
            height: { lg: "46px", md: "44px", sm: "42px", xs: "41px" },
            fontSize: { lg: "14px", md: "12px", sm: "11px", xs: "10px" },
            ...buttonSx,
          }}
        >
          Apply Coupon
        </Button>
      </Box>
      {error && (
        <Typography color="error" sx={{ fontSize: "14px" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CouponComponent;
