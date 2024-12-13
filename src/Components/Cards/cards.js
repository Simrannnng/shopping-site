import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ReusableCard = ({ product, addToCart }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '40%', md: '20%', lg: '21%' },
        borderRadius: 2,
        position: "relative",
        boxSizing: 'border-box',
      }}
    >
      {/* Discount or NEW Badge */}
      {product.badge && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: product.badge === "NEW" ? "green" : "red",
            color: "white",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {product.badge}
        </Box>
      )}

      {/* Product Image */}
      <CardMedia
        component="img"
        height="160"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "contain",
          padding: "16px",
          backgroundColor: "#F5F5F5",
        }}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          textTransform: "none",
          "&:hover": { backgroundColor: "#333" },
        }}
        startIcon={<ShoppingCartIcon />}
        onClick={() => addToCart(product)} // Call addToCart with product details
      >
        Add To Cart
      </Button>

      {/* Product Details */}
      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="body1" fontWeight="bold">
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "left", gap: 1, alignItems: "left", mt: 1 }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ color: product.badge === "-35%" ? "red" : "black" }}
          >
            ${product.price}
          </Typography>
          {product.originalPrice && (
            <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
              ${product.originalPrice}
            </Typography>
          )}
        </Box>
        {product.rating && (
          <Box sx={{ mt: 1 }}>
            <Rating value={product.rating} readOnly />
            <Typography variant="caption" sx={{ color: "gray" }}>
              ({product.reviews} reviews)
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
