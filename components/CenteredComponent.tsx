"use client"
import * as React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import DownloadButtons from './DownloadButton';
import { styled } from '@mui/material/styles';
interface Props {
    backgroundImage: string;
    title: string;
    description: string;
    image: string;
}

const CenteredComponent: React.FC<Props> = ({ backgroundImage, title, description, image }) => {
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
            height: '450px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '500px',
            objectFit: 'contain',
        },
        [theme.breakpoints.up('xl')]: {
            height: '500px',
        },
        
    }));
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '9vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: {xs:4,lg:8},
                textAlign: { xs: 'center', lg: 'left' },
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                >
                    <Grid item xs={15} lg={6}>
                    <Typography fontSize={{ xs: "20px", md: "35px", lg: "40px" }}marginTop={{lg:9}} lineHeight={{xs:"28px",md:"35px",lg:"48px"}}textAlign={"left"} fontWeight="bold" color={"#2A2A2A"} sx={{ marginBottom: { xs: 2, lg: 4 } }} >
                        {title}
                        </Typography>
                        <Typography fontSize={{ xs: "18px", md: "18px", lg: "18px" }}textAlign={"left"} lineHeight={{ lg: "26px" }} component="p" fontFamily={"Barlow-Medium"} color={"#2A2A2A"} mb={{ xs: 1, lg: 4 }}>
                           {description}
                        </Typography>
                        <DownloadButtons  />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box position="relative" display="flex" justifyContent="center" marginLeft={{ lg: "50px" }}>
                            <StyledImage src={image} alt="Golf Buddies" />
                        </Box>
                    </Grid>
                   
                </Grid>
            </Container>
        </Box>
    );
};

export default CenteredComponent;
