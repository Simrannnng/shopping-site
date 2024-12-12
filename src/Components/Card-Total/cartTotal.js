import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CartTotalComponent = ({ cartItems }) => {
    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Box
            sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                width: { lg: "300px" },
                marginTop: { lg: "-40px", md: "-40px", sm: "-40px", xs: "40px" },
                marginLeft: { lg: "955px", md: "635px", sm: "400px" }
            }}
        >
            <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
                Cart Total
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "8px",
                }}
            >
                <Typography>Subtotal:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "8px",
                }}
            >
                <Typography>Shipping:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Free</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                }}
            >
                <Typography>Total:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#D03228",
                    color: "white",
                    width: "100%",
                    padding: "10px 0",
                    fontWeight: "bold",
                    textTransform: "none",
                    '&:hover': { backgroundColor: "#A52A1E" },
                }}
            >
                Proceed to checkout
            </Button>
        </Box>
    );
};

export default CartTotalComponent;
