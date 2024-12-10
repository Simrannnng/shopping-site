import React from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import qrcodepic from '../../Assets/Png/Qrcode 1.png';
import google from '../../Assets/Png/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png';
import apple from '../../Assets/Png/download-appstore.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#000', color: '#fff', py: 5 }}>
            <Grid
                container
                spacing={5}
                sx={{
                    px: 4,
                    justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                }}
            >
                {/* Subscribe Section */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    sx={{
                        marginLeft: { lg: '60px' },
                        display: { xs: 'flex', sm: 'flex', md: 'block' },
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Exclusive
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Get 10% off your first order
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0,
                            border: '1px solid #fff',
                            borderRadius: 1,
                            overflow: 'hidden',
                            backgroundColor: '#000',
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            size="small"
                            sx={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                color: '#fff',
                                '& input': {
                                    color: '#fff',
                                    padding: '10px',
                                },
                                '& fieldset': {
                                    border: 'none',
                                },
                                '&::placeholder': {
                                    color: '#fff',
                                },
                            }}
                            InputProps={{
                                sx: { '&::placeholder': { color: '#fff' } },
                            }}
                        />
                        <Button
                            sx={{
                                color: '#fff',
                                minWidth: '60px',
                                height: '100%',
                            }}
                        >
                            &gt;
                        </Button>
                    </Box>

                </Grid>

                {/* Support Section */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    sx={{
                        marginLeft: { lg: '60px' },
                        display: { xs: 'flex', sm: 'flex', md: 'block' },
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Support
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        exclusive@gmail.com
                    </Typography>
                    <Typography variant="body2">+88015-88888-9999</Typography>
                </Grid>

                {/* Account Section */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'block' },
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Account
                    </Typography>
                    {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item) => (
                        <Link href="#" key={item} color="inherit" underline="none" sx={{ display: 'block', mb: 2 }}>
                            {item}
                        </Link>
                    ))}
                </Grid>

                {/* Quick Links Section */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'block' },
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Quick Link
                    </Typography>
                    {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
                        <Link href="#" key={item} color="inherit" underline="none" sx={{ display: 'block', mb: 2 }}>
                            {item}
                        </Link>
                    ))}
                </Grid>

                {/* Download App Section */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'block' },
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Download App
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Save $3 with App New User Only
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        {/* QR Code Image */}
                        <img src={qrcodepic} alt="QR Code" style={{ width: '80px', height: '80px' }} />

                        {/* Buttons */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <img src={google} alt="Google Play" style={{ width: '120px', height: 'auto' }} />
                            <img src={apple} alt="App Store" style={{ width: '120px', height: 'auto' }} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Facebook sx={{ fontSize: 28 }} />
                        <Twitter sx={{ fontSize: 28 }} />
                        <Instagram sx={{ fontSize: 28 }} />
                        <LinkedIn sx={{ fontSize: 28 }} />
                    </Box>
                </Grid>
            </Grid>
            <Typography
                variant="body2"
                sx={{ textAlign: 'center', mt: 4, borderTop: '1px solid #444', pt: 2, color: '#FFFFFF' }}
            >
                © Copyright Rimel 2022. All rights reserved
            </Typography>
        </Box>
    );
};

export default Footer;
