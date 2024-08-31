'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import Image from 'next/image';
import logo from './../../assets/Vector.svg'
import { SocialMediaPlatforms } from '../../mocks/socialMediaPlatforms';
import Android from './../../assets/AndroidButton.png'
import androidqr from './../../assets/androidqr.png'
import iosButton from './../../assets/iosButton.png'
import iosqr from './../../assets/iosqr.png'
const Footer = () => {
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
                                src={logo}
                                width={140}
                                height={70}
                                alt="header-logo"
                            />
                        </Link>
                        <Typography fontSize={{ md: "20px", lg: "30px" }} fontWeight={"bold"} color={"#2A2A2A"} gutterBottom>
                            Got golf buddies?
                        </Typography>
                        <Typography fontSize={{ md: "13px", lg: "18px" }} fontFamily={"Barlow"} fontWeight={"500"} color={"#2A2A2A"}>
                            Help us get the word out. LinkedGolf is here!
                        </Typography>
                        <Box mt={2} display="flex" gap={1}>
                            {SocialMediaPlatforms.map((link) => (
                                <IconButton
                                    href={link.href}
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
                                   <Image src={link.image} alt={link.alt} height={33} width={33} />
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" flexDirection={{ md: "row", lg: "column" }} gap={{ lg: '20px' }} justifyContent={"space-between"} alignItems={{ xs: 'center', md: 'center' }}>
                        <Link href="/deleteAccount" underline="none" fontSize={{ md: "14px", lg: "20px" }} fontFamily={"Barlow"} fontWeight={"500"} color="primary" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Delete Account
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfUO8dpIaYXK2AKAgM0IXKMU3epDVSI2Tt1Qf3MFocIwDtmBg/viewform" underline="none" color="primary" fontFamily={"Barlow"} fontWeight={"500"} fontSize={{ md: "14px", lg: "20px" }} sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Contact Us
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdGXCY3Hhn0-dPqETL7zqlS1FXt_CPmcse2QO1vp0j-UPqlNg/viewform?pli=1" underline="none" color="primary" fontFamily={"Barlow"} fontWeight={"500"} fontSize={{ md: "14px", lg: "20px" }} sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Report a Problem
                        </Link>
                        <Link href="/privacy" underline="none" fontSize={{ md: "14px", lg: "20px" }} fontFamily={"Barlow"} fontWeight={"500"} display={{ xs: "none", md: "block", lg: "block" }} color="primary" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Privacy Policy
                        </Link>
                        <Typography variant="body2" display={{ xs: "none", md: "none", lg: "block" }} fontSize={"20px"} fontFamily={"Barlow"} fontWeight={"400"} color="#AAAAAA" mt={2}>
                            © Copyright 2023
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" flexDirection={{ md: "row", lg: "column" }} sx={{ display: { md: "block", lg: "none" } }} justifyContent={"space-between"} alignItems={{ xs: 'center', md: 'center' }}>
                        <Link href="/privacy" underline="none" fontSize={{ md: "14px", lg: "20px" }} fontFamily={"Barlow"} fontWeight={"500"} display={{ xs: "block", md: "block", lg: "none" }} color="primary" sx={{ mb: 1, '&:hover': { textDecoration: 'underline' } }}>
                            Privacy Policy
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" flexDirection={{ md: "row", lg: "column" }} sx={{ display: { md: "block", lg: "none" } }} justifyContent={"space-between"} alignItems={{ xs: 'center', md: 'center' }}>
                        <Typography variant="body2" fontSize={"14px"} fontFamily={"Barlow"} fontWeight={"400"} display={{ xs: "block", md: "block", lg: "none" }} color="textSecondary" >
                            © Copyright 2023
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: 'center', xl: "space-between" }}>
                        <Box textAlign="center" sx={{ padding: 2, borderRadius: 2 }}>
                            <Image src={iosqr} alt="QR Code" style={{ width: '178px', marginBottom: '8px' }} />
                            <Box display="flex" justifyContent="center" gap={1} sx={{marginTop:2}}>
                                <Image src={iosButton} alt="App Store" onClick={() => window.open('https://apps.apple.com/us/app/linked-golf/id1619093321', '_blank')} width={120} height={50} />
                            </Box>
                        </Box>
                        <Box textAlign="center" sx={{ padding: 2, borderRadius: 2 }}>
                            <Image src={androidqr} alt="QR Code" style={{ width: '178px', marginBottom: '8px' }} />
                            <Box display="flex" justifyContent="center" gap={1} sx={{marginTop:2}}>
                                <Image src={Android} alt="PlayStore" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile', '_blank')} width={120} height={50} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
