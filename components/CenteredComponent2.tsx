"use client"
import * as React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import StatsSection from './StateCard';
import DownloadButtons from './DownloadButton';
import { styled } from '@mui/material/styles';
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
    const formattedDescription = description.split('\n').map((line, index) => (
        <Typography fontSize={{ xs: "18px", md: "18px", lg: "18px" }} textAlign={"left"} lineHeight={{ lg: "26px" }} component="p" fontWeight={"500"} fontFamily={"Barlow-Medium"} color={"#2A2A2A"} mb={{ xs: 0, lg: 2 }}>
            {line}
        </Typography>
    ));
    const StyledImage = styled('img')(({ theme }) => ({
        objectFit: 'contain',
        [theme.breakpoints.up('xs')]: {
            objectFit: 'contain',
            height: '450px',
             marginTop:'-30px',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop:'-30px',
            objectFit: 'contain',
            height: '450px',
        },
        [theme.breakpoints.up('md')]: {
            objectFit: 'contain',
            height: '450px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '600px',
            objectFit: 'contain',
        },
        [theme.breakpoints.up('xl')]: {
            height: '650px',
            objectFit: 'contain',
        },
    }));
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
                py: bottomImage ? undefined : { xs: 4, lg: 16 },
                textAlign: { xs: 'center', lg: 'left' },
                flexDirection: 'column',
            }}
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={4}
                    sx={{
                        flexDirection: { xs: 'column-reverse', lg: 'row' },
                    }}
                >
                    <Grid item xs={16} lg={6}>
                        <Box position="relative" display="flex" justifyContent="center" marginTop={{xs:courses?"20px":"0px"}}>
                            <StyledImage src={image} alt="Golf Buddies" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={{ xs: "20px", md: "35px", lg: "40px" }} marginTop={{lg:10}} lineHeight={{xs:"28px",md:"35px",lg:"48px"}} textAlign={"left"} fontWeight="bold" color={"#2A2A2A"} sx={{ marginBottom: { xs: 2, lg: 3 } }} >
                            {title}
                        </Typography>
                        <Box>{formattedDescription}</Box>
                        {courses && <StatsSection />}
                       <Box marginTop={3}>
                       <DownloadButtons  />
                       </Box>
                    </Grid>
                </Grid>
            </Container>
            {bottomImage && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: {xs:-2,lg:-8},
                    }}
                >
                    <BottomImage src={bottomImage} alt="Bottom Image" />
                </Box>
            )}
        </Box>
    );
};

export default CenteredComponent2;
