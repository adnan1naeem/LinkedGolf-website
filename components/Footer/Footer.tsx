'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import Image from 'next/image';
const Footer: React.FC = () => {
    const socialMediaIcons = [
        { href: 'https://www.facebook.com/LinkedGolfApp', src: '/facebook.svg', alt: 'Facebook', color: '#1877F2' },
        { href: 'https://www.instagram.com/linkedgolfapp/?hl=en', src: '/instagram.svg', alt: 'Instagram', color: '#E1306C' },
        { href: '#', src: '/twitter.svg', alt: 'Twitter', color: '#1DA1F2' },
        { href: '#', src: '/linkedin.svg', alt: 'LinkedIn', color: '#0A66C2' },
        { href: '#', src: '/rabbit.svg', alt: 'Reddit', color: '#FF4500' },
    ];
    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)',
                py: 4,
            }}
        >
            <Container maxWidth={false} sx={{ maxWidth: { md: "1000px", lg: "1280px", xl: '1450px' }, width: '100%' }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Link href="/" sx={{ flexShrink: 0 }}>
                            <Image
                                src="/Vector.svg"
                                width={140}
                                height={70}
                                alt="header-logo"
                            />
                        </Link>
                        <Typography fontSize={{ md: "20px", lg: "30px" }} fontWeight={"bold"} color={"#2A2A2A"} gutterBottom>
                            Got golf buddies?
                        </Typography>
                        <Typography fontSize={{ md: "13px", lg: "18px" }} fontFamily={"Barlow"} fontWeight={'500'} color={"#2A2A2A"}>
                            Help us get the word out. LinkedGolf is here!
                        </Typography>
                        <Box mt={2} display="flex" gap={1}>
                            {socialMediaIcons.map((icon, index) => (
                                <IconButton
                                    key={index}
                                    href={icon.href}
                                    sx={{
                                        bgcolor: 'white',
                                        height: 35,
                                        width: 35,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%',
                                        '&:hover': { opacity: 0.75 },
                                    }}
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        style={{ width: '90%', height: '90%' }}
                                    />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" flexDirection={{ md: "row", lg: "column" }} gap={{ lg: '20px' }} justifyContent={"space-between"} alignItems={{ xs: 'center', md: 'center' }}>
                        <Link href="/deleteAccount" underline="none" fontSize={{ md: "14px", lg: "20px" }} fontFamily={"Barlow"} fontWeight={'500'} color="primary" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Delete Account
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfUO8dpIaYXK2AKAgM0IXKMU3epDVSI2Tt1Qf3MFocIwDtmBg/viewform" underline="none" color="primary" fontFamily={"Barlow"} fontWeight={'500'} fontSize={{ md: "14px", lg: "20px" }} sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Contact Us
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdGXCY3Hhn0-dPqETL7zqlS1FXt_CPmcse2QO1vp0j-UPqlNg/viewform?pli=1" underline="none" color="primary" fontFamily={"Barlow"} fontWeight={'500'} fontSize={{ md: "14px", lg: "20px" }} sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Report a Problem
                        </Link>
                        <Link href="/privacy" underline="none" fontSize={{ md: "14px", lg: "20px" }} fontFamily={"Barlow"} fontWeight={'500'} display={{ xs: "none", md: "block", lg: "block" }} color="primary" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Privacy Policy
                        </Link>
                        <Typography variant="body2" display={{ xs: "none", md: "none", lg: "block" }} fontSize={"20px"} fontFamily={"Barlow"} fontWeight={'400'} color="#AAAAAA" mt={2}>
                            © Copyright 2023
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" flexDirection={{ md: "row", lg: "column" }} sx={{ display: { md: "block", lg: "none" } }} justifyContent={"space-between"} alignItems={{ xs: 'center', md: 'center' }}>
                        <Link href="/privacy" underline="none" fontSize={{ md: "14px", lg: "20px" }} fontFamily={"Barlow"} fontWeight={'500'} display={{ xs: "block", md: "block", lg: "none" }} color="primary" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Privacy Policy
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" flexDirection={{ md: "row", lg: "column" }} sx={{ display: { md: "block", lg: "none" } }} justifyContent={"space-between"} alignItems={{ xs: 'center', md: 'center' }}>
                        <Typography variant="body2" fontSize={"14px"} fontFamily={"Barlow"} fontWeight={'400'} display={{ xs: "block", md: "block", lg: "none" }} color="textSecondary" >
                            © Copyright 2023
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', xl: "space-between" }}>
                        <Box textAlign="center" sx={{ padding: 2, borderRadius: 2 }}>
                            <img src="/iosqr.png" alt="QR Code" style={{ width: '178px', marginBottom: '8px' }} />
                            <Box display="flex" justifyContent="center" gap={1}>
                                <a href="https://apps.apple.com/us/app/linked-golf/id1619093321" target="_blank" rel="noopener noreferrer">
                                    <img src="/iosButton.png" alt="Google Play" style={{ width: '120px', objectFit: 'cover' }} />
                                </a>
                            </Box>
                        </Box>
                        <Box textAlign="center" sx={{ padding: 2, borderRadius: 2 }}>
                            <img src="/androidqr.png" alt="QR Code" style={{ width: '178px', marginBottom: '8px' }} />
                            <Box display="flex" justifyContent="center" gap={1}>
                                <a href="https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile" target="_blank" rel="noopener noreferrer">
                                    <img src="/AndroidButton.png" alt="App Store" style={{ width: '120px' }} />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
