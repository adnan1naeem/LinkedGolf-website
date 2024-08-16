'use client';
import React from 'react';
import { Box, Typography, Container, Grid, styled } from '@mui/material';
import CustomButton from '../CustomButton';


const MainBanner = () => {
    const StyledImage = styled('img')({
        width: '35rem',
        objectFit: 'cover',
    });
    return (
        <Box
            sx={{
                background: 'transparent',
                display: 'flex',
                flex: 1,
                py: { xs: 10, lg: 16 },
                textAlign: { xs: 'center', lg: 'left' },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={15} lg={6}>
                        <Typography fontSize={{ xs: 28, md: 50, lg: 63 }} fontWeight="bold" fontFamily={"inter"} color={"black"} sx={{ marginBottom: { xs: 4, lg: 8 } }} >
                            Got Golf Buddies?
                        </Typography>
                        <Typography variant="h6" component="p" fontFamily={"Barlow-Regular"} color={"black"} mb={8}>
                            LinkedGolf is an app designed to help you build your golf network. Get out on the course more often by scheduling outings with your buddies whose golf availability matches yours.
                        </Typography>

                        <Box display="flex" justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }} alignItems="center" flexDirection={{ xs: 'column', lg: 'row' }} alignSelf={{ md: "center" }} gap={2} mb={12}>
                            <CustomButton
                                iconState={true}
                                variant="primary"
                                onClick={() => alert('Button clicked!')}
                                sx={{ width: { xs: '80%', sm: '80%', md: '60%', lg: 'auto' } }}
                            >
                                Download for ios
                            </CustomButton>
                            <CustomButton
                                iconState={true}
                                variant="secondary"
                                onClick={() => alert('Button clicked!')}
                                sx={{ width: { xs: '80%', sm: '80%', md: '60%', lg: 'auto' } }}
                            >
                                Download for Android
                            </CustomButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box position="relative" display="flex" justifyContent="center" marginLeft={{ lg: "50px" }}>
                            <StyledImage src="/MainBanner.png" alt="Golf Buddies" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MainBanner;
