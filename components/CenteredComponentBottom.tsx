"use client"
import * as React from 'react';
import { Grid, Typography, Box, Container, styled } from '@mui/material';
import DownloadButtons from './DownloadButton';

interface Props {
    backgroundImage: string;
    title: string;
    description: string;
    image: string;
    bottomImage?: string;
    backgroundcolor: string;
}

const CenterComponentBottom: React.FC<Props> = ({ backgroundImage, title, description, image, bottomImage, backgroundcolor }) => {
    const formattedDescription = description.split('\n').map((line, index) => (
        <Typography fontSize={{ xs: "18px", md: "18px", lg: "18px" }}textAlign={"left"} lineHeight={{ lg: "26px" }} component="p" fontFamily={"Barlow-Medium"} color={"#2A2A2A"} mb={{ xs: 0, lg: 2 }}>
        {line}
    </Typography>
    ));

    const StyledImage = styled('img')(({ theme }) => ({
        objectFit: 'contain',
    
        [theme.breakpoints.up('xs')]: {
            objectFit: 'contain',
            height: '450px',
        },
        [theme.breakpoints.up('sm')]: {
            objectFit: 'contain',
            height: '450px',
        },
        [theme.breakpoints.up('md')]: {
            objectFit: 'contain',
            height: '350px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '550px',
            objectFit: 'contain',
        },
        [theme.breakpoints.up('xl')]: {
            height: '550px',
        },
        
    }));

    return (
        <Box
            sx={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundColor: backgroundImage ? 'transparent' : backgroundcolor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: bottomImage ? undefined : { xs: 4, lg: 4 },
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
                        <Typography fontSize={{ xs: "20px", md: "35px", lg: "40px" }} lineHeight={{xs:"28px",md:"35px",lg:"48px"}} textAlign={"left"} fontWeight="bold" color={"#2A2A2A"} sx={{ marginBottom: { xs: 2, lg: 4 } }} >
                            {title}
                        </Typography>
                       <Box>{formattedDescription}</Box>
                        <DownloadButtons  />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CenterComponentBottom;
