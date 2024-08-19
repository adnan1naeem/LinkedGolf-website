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
}

const CenteredComponent3: React.FC<Props> = ({  title, description, image, bottomImage, backgroundcolor, courses }) => {
    const formattedDescription = description.split('\n').map((line, index) => (
        <Typography fontSize={{ xs: "18px", md: "18px", lg: "18px" }}textAlign={"left"} lineHeight={{ lg: "26px" }} component="p" fontFamily={"Barlow-Medium"} color={"#2A2A2A"} mb={{ xs: 0, lg: 2 }}>
        {line}
    </Typography>
    ));

    const StyledImage = styled('img')(({ theme }) => ({
        position: 'relative',
        width: '100%',
        zIndex: 1,
    
        [theme.breakpoints.up('xs')]: {
            objectFit: 'none',
            height: '450px',
        },
        [theme.breakpoints.up('sm')]: {
            objectFit: 'none',
            height: '450px',
        },
        [theme.breakpoints.up('md')]: {
            objectFit: 'none',
            height: '450px',
        },
        [theme.breakpoints.up('lg')]: {
            objectFit: 'none',
            height: '440px',
        },
        [theme.breakpoints.up('xl')]: {
            height: '500px',
        },
    
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(181, 218, 252, 0.5)', // Semi-transparent background color
            zIndex: 2,
        },
    }));
    


    return (
        <Box
            sx={{
                backgroundImage:  'none',
                backgroundColor: backgroundcolor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '9vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py:{ xs: 6, lg: 10 },
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
                        <Typography fontSize={{ xs: "20px", md: "35px", lg: "40px" }} lineHeight={{xs:"28px",md:"35px",lg:"48px"}}textAlign={"left"} fontWeight="bold" color={"#2A2A2A"} sx={{ marginBottom: { xs: 4, lg: 6 } }} >
                            {title}
                        </Typography>
                       <Box>{formattedDescription}</Box>
                        {courses&& <StatsSection/>}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CenteredComponent3;
