import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const CouponComponent = () => {
    const [couponCode, setCouponCode] = useState("");

    const handleApplyCoupon = () => {
        if (couponCode) {
            alert(`Coupon "${couponCode}" applied!`);
        } else {
            alert("Please enter a coupon code.");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                marginTop:"40px",
                marginLeft: { lg: "63px" }
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                sx={{
                    width: { lg: "300px", md: "220px", sm: "200px", xs: "260px" }, marginRight: "10px",
                    "& .MuiInputBase-input": {
                        height: {md:"25px"}, 
                        padding: "10px", 
                    },
                }}
            />
            <Button
                variant="contained"
                color="error"
                onClick={handleApplyCoupon}
                sx={{
                    width: { lg: "150px", md: "130px", sm: "122px", xs: "120px" },
                    height: { lg: "46px", md: "44px", sm: "42px", xs: "41px" },
                    fontSize: { lg: "14px", md: "12px", sm: "11px", xs: "10px" },
                }}
            >
                Apply Coupon
            </Button>
        </Box>
    );
};

export default CouponComponent
