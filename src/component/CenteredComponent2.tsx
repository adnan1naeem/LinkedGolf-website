"use client"
import * as React from 'react';
import { Grid, Typography, Box, Container, styled } from '@mui/material';
import StatsSection from './StateCard';

interface Props {
    backgroundImage: string;
    title: string;
    description: string;
    image: string;
    bottomImage?: string;
    backgroundcolor: string;
    courses: string;
    golfer: string;
}

const CenteredComponent2: React.FC<Props> = ({ backgroundImage, title, description, image, bottomImage, backgroundcolor, courses, golfer }) => {
    const StyledImage = styled('img')({
        height: '50vh',
        width: '100%',
        maxWidth: '700px',
        objectFit: 'contain',
    });

    const BottomImage = styled('img')({
        width: '100%',
        maxWidth: '100%',
        objectFit: 'contain',
        marginTop: '-20px',
    });

    return (
        <Box
            sx={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundColor: backgroundImage ? 'transparent' : backgroundcolor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '9vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: !bottomImage && 10, lg: !bottomImage && 16 },
                textAlign: { xs: 'center', lg: 'left' },
                flexDirection: 'column',
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        flexDirection: { xs: 'column-reverse', lg: 'row' },
                    }}
                >
                    <Grid item xs={16} lg={6}>
                        <Box position="relative" display="flex" justifyContent="center" marginLeft={{ lg: "50px" }}>
                            <StyledImage src={image} alt="Golf Buddies" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={{ xs: 28, md: 35, lg: 40 }} fontWeight="bold" fontFamily={"inter"} color={"#2A2A2A"} sx={{ marginBottom: { xs: 4, lg: 6 } }} >
                            {title}
                        </Typography>
                        <Typography fontSize={{ xs: 18, md: 18, lg: 18 }} lineHeight={{ lg: "26px" }} component="p" fontFamily={"Barlow-Medium"} color={"#2A2A2A"} mb={{ xs: 0, lg: 8 }}>
                            {description}
                        </Typography>
                        {courses&&
                        <StatsSection/>}
                    </Grid>
                </Grid>
            </Container>
            {bottomImage && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: -8,
                    }}
                >
                    <BottomImage src={bottomImage} alt="Bottom Image" />
                </Box>
            )}
        </Box>
    );
};

export default CenteredComponent2;
