import React, { useState } from "react";
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import image2 from "../../Assets/Png/ak-900-01-500x500 1.png";
import image3 from "../../Assets/Png/Frame 608.png";
import CouponComponent from '../../Components/Coupon/coupon'
import CartTotalComponent from '../../Components/Card-Total/cartTotal'

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: image2,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: image3,
    },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleQuantityChange = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ padding: { lg: "75px", md: "20px", sm: "10px", xs: "10px" } }}>
      <Typography
        variant="h6"
        sx={{ marginBottom: { lg: "60px", md: "20px", sm: "20px", xs: "25px" }, marginTop: { lg: "130px", md: "200px", sm: "200px", xs: "230px" } }}
      >
        Home / Cart
      </Typography>

      <TableContainer
        sx={{
          width: { lg: "90%" },
          marginLeft: { lg: "70px" },
          marginBottom: { lg: "30px", md: "20px", sm: "20px", xs: "20px" },
        }}
      >
        <Table
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0",
            border: "none",
            height: { lg: "330px" },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell sx={{ width: { lg: "250px" } }}>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => handleRemoveItem(item.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <Typography>{item.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      marginRight: { lg: "50px" },
                    }}
                  >
                    <Typography sx={{ margin: "0 10px" }}>
                      {item.quantity}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginLeft: "8px",
                        gap: "1px", // Reduce space between arrows
                      }}
                    >
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, true)}
                        size="small"
                      >
                        <ArrowDropUpIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, false)}
                        size="small"
                      >
                        <ArrowDropDownIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>${item.price * item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: { lg: "60px" },
        }}
      >
        <Button
          variant="outlined"
          color="black"
          sx={{ marginLeft: { lg: "65px" }, width: { lg: "170px", md: "160px", sm: "150px" }, height: { lg: "50px", md: "40px", sm: "30px" }, fontSize: { md: "13px", sm: "12px", xs: "11px" } }}
          onClick={() => navigate("/")} // Navigate to the landing page
        >
          Return To Shop
        </Button>
        <Button
          variant="outlined"
          color="black"
          sx={{ marginRight: { lg: "65px" }, fontSize: { md: "13px", sm: "12px", xs: "11px" } }}
        >
          Update Cart
        </Button>
      </Box>

      <CouponComponent />
      <CartTotalComponent cartItems={cartItems} />
    </Box>
  );
};

export default CartComponent;

