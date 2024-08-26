'use client';
import React from 'react';
import { Box, Typography, Container, Grid, styled } from '@mui/material';
import CustomButton from '../CustomButton';

interface MainBannerProps {
    title: string;
    description: string;
    imageUrl: string;
    showImageOnLeft?: boolean;
    iosButtonText: string;
    androidButtonText: string;
    imageBackground: boolean;
}

const StyledImage = styled('img')({
    width: '45rem',
    objectFit: 'cover',
});

const MainBanner: React.FC<MainBannerProps> = ({
    title,
    description,
    imageUrl,
    showImageOnLeft = false,
    iosButtonText,
    androidButtonText,
    imageBackground,
}) => {
    return (
        <Box
            sx={{
                background: imageBackground
                    ? {xs:"#FFFFFF",md:"#FFFFFF",lg:`url("/Layer2.png")`}
                    : 'transparent',
                display: 'flex',
                flex: 1,
                paddingTop: { xs: imageBackground && '30px' },
                py: imageBackground ? undefined : { xs: 8, lg: 8 },
                textAlign: { xs: 'center', lg: 'left' },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    direction={showImageOnLeft ? 'row-reverse' : 'row'}
                >
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={{ xs: "28px", md: "50px",xl: imageBackground ? "40px" : "55px" }} marginTop={{lg:9}} fontWeight="bold" color="#2A2A2A" sx={{ marginBottom: { xs: "4px", lg: "8px" } }}>
                            {title}
                        </Typography>
                        <Typography fontSize={{ sm: "16px", md: "20px", lg: "20px" }} fontFamily="Barlow-Medium" color="#2A2A2A" mt={{lg:imageBackground?0:6}} mb={3}>
                            {description}
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }}
                            alignItems={"center"}
                            flexDirection={{ xs: 'column', lg: 'row' }}
                            alignSelf={{ md: 'center' }}
                            gap={2}
                            marginTop={{xl:8,lg:8}}
                        >
                            <CustomButton
                                iconState={true}
                                variant="primary"
                                onClick={() => window.open('https://apps.apple.com/us/app/linked-golf/id1619093321', '_blank')}
                                sx={{ width: { xs: '70%', sm: '80%', md: '60%', lg: 'auto' } }}
                            >
                                {iosButtonText}
                            </CustomButton>
                            <CustomButton
                                iconState={true}
                                variant="secondary"
                                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile', '_blank')}
                                sx={{ width: { xs: '70%', sm: '80%', md: '60%', lg: 'auto' } }}
                            >
                                {androidButtonText}
                            </CustomButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box position="relative" display="flex" justifyContent="center" marginLeft={{ lg: showImageOnLeft ? "0" : "50px" }} marginRight={{ lg: showImageOnLeft ? "50px" : "0" }}>
                            <StyledImage src={imageUrl} alt="Banner Image" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MainBanner;
