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
    width: '35rem',
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
                paddingTop:{xs:imageBackground&&'30px'},
                py:imageBackground?undefined: { xs: 10, lg: 16 },
                textAlign: imageBackground ? 'left' : { xs: 'center', lg: 'left' },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    direction={showImageOnLeft ? 'row-reverse' : 'row'}
                >
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={{ xs: "28px", md: "50px", lg:imageBackground?"40px": "60px" }} fontWeight="bold" color="#2A2A2A" sx={{ marginBottom: { xs: "4px", lg: "8px" } }}>
                            {title}
                        </Typography>
                        <Typography variant="h6" component="p" fontFamily="Barlow-Regular" color="#2A2A2A" mb={8}>
                            {description}
                        </Typography>

                        <Box
                            display="flex"
                            justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }}
                            alignItems={imageBackground?"baseline":"center"}
                            flexDirection={{ xs: 'column', lg: 'row' }}
                            alignSelf={{ md: 'center' }}
                            gap={2}
                            mb={12}
                        >
                            <CustomButton
                                iconState={true}
                                variant="primary"
                                onClick={() => alert(`${iosButtonText} button clicked!`)}
                                sx={{ width: { xs: '80%', sm: '80%', md: '60%', lg: 'auto' } }}
                            >
                                {iosButtonText}
                            </CustomButton>
                            <CustomButton
                                iconState={true}
                                variant="secondary"
                                onClick={() => alert(`${androidButtonText} button clicked!`)}
                                sx={{ width: { xs: imageBackground?"85%":'80%', sm: imageBackground?"85%":'80%', md: '60%', lg: 'auto' } }}
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
