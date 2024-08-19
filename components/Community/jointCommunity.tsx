"use client";
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
interface NumberBoxProps {
    $isComma?: boolean;
}

const ImageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "10px",
    
    [theme.breakpoints.down('md')]: {
        borderRadius: "40px",
        height: '100%',
    },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(to right, #F3FBF040 0%, #F3FBF080 70%, #F3FBF0A0 90%, #F3FBF080 100%), url("/image 1.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0 20px 20px 0',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        padding: "10px",

    },
    [theme.breakpoints.down('sm')]: {
        height: "100%"
    },
}));

const NumberBox = styled(Box)<NumberBoxProps>(({ theme, $isComma }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: $isComma?"end":'center',
    fontFamily:"Quicksand-Bold",
    backgroundColor: $isComma ? 'transparent' : '#032F5B',
    color: $isComma ? '#032F5B' : '#fff',
    borderRadius: '8px',
    margin: $isComma ? '0 0 0 0px' : '0 2px',
    minWidth: $isComma?"25px":'50px',
    minHeight: '50px',
    fontSize: '40px',
    [theme.breakpoints.down('md')]: {
        padding: '0px',
        fontSize: '14px',
        minWidth: '21px',
        minHeight: '21px',
        margin: $isComma ? '0 0 0 4px' : '0 2px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0px',
        fontSize: '14px',
        minWidth: '21px',
        minHeight: '21px',
        margin: $isComma ? '0 0 0 4px' : '0 2px',
    },
}));


const JoinCommunitySection: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#E6F0FF',
                minHeight: '9vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 10, lg: 16 },
                textAlign: { xs: 'left', lg: 'left' },
                flexDirection: { xs: 'column', lg: 'row' },
                height: { sm: "40vh", md: "60vh", lg: '70vh' },
            }}
        >
            <Container maxWidth={false} sx={{ maxWidth: { md: "1000px", lg: "1280px", xl: '1380px' }, width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        borderRadius:'0px 20px 20px 0px',
                        boxShadow: '4px 4px 10px #B5DAFC80',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: { xl: "49vh", lg: '55vh', md: "43vh", sm: "34vh", xs: "24vh" },
                        }}
                    >
                        <ImageContainer>
                            <img
                                src="/golfcourt.png"
                                alt="Golf Course"
                                style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius:'10px 0px 0px 10px' }}
                            />
                        </ImageContainer>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                           

                            height: { xl: "49vh", lg: '55vh', md: "43vh", sm: "34vh", xs: "24vh" },
                        }}
                    >
                        <ContentContainer>
                            <Typography fontSize={{ sm: '16px', md: "25px", lg: "40px" }} lineHeight={{ sm: '20px', md: "27px", lg: "48px" }} color={"#2A2A2A"} fontWeight={"bold"} gutterBottom textAlign="center">
                                Join the hottest golfer community right now.
                            </Typography>
                            <Box display="flex" justifyContent="center">
                                {['1', '0', '3', ',', '1', '1', '6'].map((char, index) => (
                                    <NumberBox key={index} $isComma={char === ','}>
                                        {char}
                                    </NumberBox>
                                ))}
                            </Box>
                        </ContentContainer>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default JoinCommunitySection;
