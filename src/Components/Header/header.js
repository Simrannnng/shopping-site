import React, { useState } from "react";
import {AppBar,Toolbar,Box,Typography,InputBase,IconButton,Badge,Drawer,List,ListItem,ListItemText,Select,MenuItem} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            {/* Black Bar */}
            <AppBar
                position="fixed"
                sx={{
                    top: 0,
                    backgroundColor: "black",
                    padding: "5px 10px",
                    zIndex: 1300,
                    width: "100%", 
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
            >
                <Toolbar
                    sx={{
                        flexDirection: { xs: "column", sm: "row" }, 
                        justifyContent: "center", 
                        alignItems: "center", 
                    }}
                >
                    {/* Summer Sale Message */}
                    <Typography
                        variant="body2"
                        color="white"
                        sx={{
                            textAlign: "center",
                            flexGrow: { xs: 0, sm: 1 },
                            marginLeft: { lg: "100px" },
                            marginBottom: { xs: "5px", sm: 0 },
                        }}
                    >
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                        <span style={{ fontWeight: "bold", cursor: "pointer" }}>ShopNow</span>
                    </Typography>



                    <Select
                        defaultValue="English"
                        IconComponent={ArrowDropDownIcon} 
                        sx={{
                            color: "white",
                            height: "40px",
                            fontSize: "16px",
                            marginRight:{lg:"50px"},
                            marginTop: { xs: "5px", sm: 0 }, 
                            textAlign: "center",
                            "& .MuiSelect-icon": {
                                color: "white", 
                            },
                        }}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                        <MenuItem value="German">German</MenuItem>
                    </Select>

                </Toolbar>
            </AppBar>


            {/* Navigation Bar */}
            <AppBar position="fixed" color="inherit" elevation={1} sx={{ top: {xs: 100 ,sm:70}, width: "100%", zIndex: 1299 }}>
                <Toolbar sx={{ justifyContent: "space-between", padding: "10px 20px" }}>
                    
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            marginLeft: { lg: "55px" },
                            flexGrow: { xs: 0, md: 0 },
                        }}
                    >
                        Exclusive
                    </Typography>

                
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex", md: "flex" },
                            gap: { lg: "50px", sm: "20px" },
                        }}
                    >
                        <Typography variant="body1" sx={{ cursor: "pointer" }}>
                            Home
                        </Typography>
                        <Typography variant="body1" sx={{ cursor: "pointer" }}>
                            Contact
                        </Typography>
                        
                        <Typography variant="body1" sx={{ cursor: "pointer" }}>
                            About
                        </Typography>
                        <Typography variant="body1" sx={{ cursor: "pointer" }}>
                            Sign Up
                        </Typography>
                    </Box>

                    {/* Search Bar */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { lg: '30px', sm: '10px' }, marginRight: { lg: "80px" , md:"20px"} }}>

                        <Box
                            sx={{
                                display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                                alignItems: 'center',
                                backgroundColor: '#f5f5f5',
                                borderRadius: '5px',
                                padding: { lg: '0 10px', sm: '0 1px' },
                                width: { lg: '250px', sm: "210px" , },
                            }}
                        >
                            <InputBase
                                placeholder="What are you looking for?"
                                sx={{ flexGrow: 1, fontSize: '0.9rem' }}
                            />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { lg: '30px',md:"30px", sm: '25px', xs: '30px' } }}>
                            <Badge badgeContent={4} color="error" sx={{width:{xs:"5px"}}}>
                                <FavoriteBorderIcon />
                            </Badge>
                            <Badge color="error" sx={{width:{xs:"5px"}}}>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                            <Badge color="error" sx={{width:{xs:"5px"}}}>
                                <PermIdentityIcon />
                            </Badge>
                            <IconButton
                                sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Navigation Links */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: "block", md: "none" },
                zIndex: 1400, }}
            >
                <Box
                    sx={{ width: 150 }}
                    role="presentation"
                    onKeyDown={(e) => e.stopPropagation()}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#f5f5f5",
                            borderRadius: "5px",
                            padding: "5px 10px",
                            marginBottom: "20px",
                        }}
                    >
                        <InputBase
                            placeholder="What are you looking for?"
                            sx={{ flexGrow: 1, fontSize: "0.9rem" }}
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {["Home", "Contact", "About", "Sign Up"].map((text) => (
                            <ListItem button key={text}>
                                <ListItemText
                                    primary={text}
                                    sx={{
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
