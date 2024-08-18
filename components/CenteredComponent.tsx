"use client"
import * as React from 'react';
import { Grid, Typography, Box, Container, styled } from '@mui/material';

interface Props {
    backgroundImage: string;
    title: string;
    description: string;
    image: string;
}

const CenteredComponent: React.FC<Props> = ({ backgroundImage, title, description, image }) => {
    const StyledImage = styled('img')({
        height:'55vh',
        width: '100%',
        maxWidth: '700px',
        objectFit: 'cover',
    });
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
                py: {xs:10,lg:16},
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
                        <Typography fontSize={{ xs: 28, md: 35, lg: 40 }}textAlign={{xs:"left",sm:"left",md:"left",lg:"center"}} fontWeight="bold" color={"#2A2A2A"} sx={{ marginBottom: { xs: 4, lg: 6 } }} >
                        {title}
                        </Typography>
                        <Typography fontSize={{ xs: 18, md: 18, lg: 18 }}textAlign={{xs:"left",sm:"left",md:"left",lg:"center"}} lineHeight={{lg:"26px"}} component="p" fontFamily={"Barlow-Medium"} color={"#2A2A2A"} mb={{xs:0,lg:8}}>
                           {description}
                        </Typography>
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
