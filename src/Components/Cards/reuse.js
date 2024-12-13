import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ReusableCard from "../../Components/Cards/cards";

const ReusableSection = ({ 
  title, 
  buttonText, 
  products, 
  actionIcon, 
  mt, 
  onButtonClick, 
  onActionClick, 
  addToCart  // Add the addToCart prop
}) => {
  return (
    <Box sx={{ mt: mt || 27 }}>
      {/* Title and Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 8 }}>
        <Typography
          variant="h6"
          sx={{ marginLeft: { xs: '10px', sm: '50px', md: '70px', lg: '80px' } }}
        >
          {title}
        </Typography>
        <Button
          variant="outlined" 
          sx={{
            textTransform: "none",
            color: 'black',
            marginRight: { xs: '10px', sm: '50px', md: '70px', lg: '85px' }
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>

      {/* Cards */}
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <ReusableCard
            key={product.id}  // Use product.id instead of index for better key uniqueness
            product={product}
            actionIcon={actionIcon}
            onActionClick={() => onActionClick(product.id)} // Update to pass product.id
            addToCart={() => addToCart(product)}  // Pass the addToCart function with the current product
          />
        ))}
      </Box>
    </Box>
  );
};

export default ReusableSection;
