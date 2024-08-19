"use client"
import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';
import CustomButton from '../CustomButton';

interface Props {
    backgroundImage: string;
    title: string;
    buttonText: string;
    image: string;
}

const Container = styled(Box)({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
});

const LeftSide = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',

    [theme.breakpoints.down('md')]: {
        marginTop: '40px',
        marginBottom: '40px'
    },
}));

const RightSide = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
const StyledImage = styled('img')({
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
});


const GolfCourseCTA: React.FC<Props> = ({ backgroundImage, title, buttonText, image }) => {
    return (
        <Container
            sx={{
                backgroundImage: {
                    xs: `linear-gradient(to right, #F3FBF040 0%, #F3FBF080 70%, #F3FBF0A0 90%, #F3FBF080 100%), url(${backgroundImage})`,
                    md: `linear-gradient(to right, #F3FBF040 0%, #F3FBF080 70%, #F3FBF0A0 90%, #F3FBF080 100%), url(${backgroundImage})`,
                    lg: `url(${backgroundImage})`,
                }
            }}>
            <LeftSide>
                <Typography color={"#2A2A2A"} fontSize={{ sm: "16px", md: "20px", lg: "40px" }} fontWeight={"bold"}  lineHeight={{ sm: "20px", md: "28px", lg: "48px" }} sx={{ textAlign: "center", paddingLeft: '10%', paddingRight: '10%' }} gutterBottom>
                    {title}
                </Typography>
                <CustomButton
                    iconState={false}
                    variant="secondary"
                    onClick={() => alert('Button clicked!')}
                    sx={{ width: { xs: '65%', sm: '40%', md: '70%', lg: 'auto' },marginTop:{xs:"15px",lg:'0px'}, border: '1px solid black', alignSelf: 'center', color: "black", fontSize: { lg: "18px", md: "16px" } }}>
                    {buttonText}
                </CustomButton>
            </LeftSide>
            <RightSide>
                <StyledImage src={image} alt="Decorative" />
            </RightSide>
        </Container>
    );
};

export default GolfCourseCTA;
