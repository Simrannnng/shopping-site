import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartTotalComponent = ({ cartItems, discount = 0, sx = {}, hideCheckoutButton = false }) => {
    const navigate = useNavigate();

    const handleCheckOutClick = () => {
        navigate("/Form-page", { state: { cartItems } });
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountedTotal = discount < 1 ? subtotal - subtotal * discount : subtotal - discount;

    return (
        <Box
            sx={{
                border: hideCheckoutButton ? "none" : "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                width: { lg: "300px", ...sx },
                marginTop: { lg: "-40px", md: "-40px", sm: "-40px", xs: "40px", ...sx },
                marginLeft: { lg: "955px", md: "635px", sm: "400px", ...sx },
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
                <Typography>Subtotal=</Typography>
                <Typography sx={{ fontWeight: "bold" }}>${subtotal.toFixed(2)}</Typography>
            </Box>
            {discount > 0 && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "8px",
                    }}
                >
                    <Typography>Discount:</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                        -${(subtotal - discountedTotal).toFixed(2)}
                    </Typography>
                </Box>
            )}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                }}
            >
                <Typography>Total:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>${discountedTotal.toFixed(2)}</Typography>
            </Box>
            {!hideCheckoutButton && (
                <Button
                    variant="contained"
                    onClick={handleCheckOutClick}
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
            )}
        </Box>
    );
};
export default CartTotalComponent;
