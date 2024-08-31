import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import Image1 from './../../assets/images/features/golfCourses.png'
import Image2 from './../../assets/images/features/golfCourses.png'
import Image3 from './../../assets/images/features/golfCourses.png'
import Image4 from './../../assets/images/features/golfCourses.png'
const StepCard = ({ step, description, children }) => (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: { xs: "28px", sm: "28px", md: "30px", lg: "42px" }, color: '#D4D4D4A6' }}
        >
            {step}
        </Typography>
        <Paper
            elevation={0}
            sx={{
                position: 'relative',
                width: { md: "205px", lg: '270px', xl: "295px" },
                height: { md: "400px", lg: '400px', xl: "500px" },
                mx: 'auto',
                borderRadius: 5,
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #ECF5FE 0%, #DAECFD05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 2,
            }}
        >
            <Typography
                fontWeight={"bold"}
                sx={{ color: '#2A2A2A', pt: { xs: "15px" }, fontSize: { md: "16px", lg: "18px" } }}
            >
                {description}
            </Typography>

            {children}
        </Paper>
    </Box>
);


const DeleteAccountSteps = () => {

    return (
        <Box
            sx={{
                backgroundColor: '#DAECFD',
                py: 8,
                px: { xs: 2, sm: 3, md: 6, lg: 8 },
            }}
        >
            <Grid container spacing={4} textAlign={"center"} justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <StepCard step="Step 1" description="Click on settings">
                        <Image
                            component="img"
                            src={Image1}
                            alt="Step 1 Image"
                            sx={{
                                width: { md: "200px", lg: '210px', xl: "255px" },
                                marginTop: 2,
                                height: 400,
                                objectFit: 'contain',
                            }}
                        />

                    </StepCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StepCard step="Step 2" description="Click on leave feedback">
                        <Image
                            component="img"
                            src={Image2}
                            alt="Step 2 Image"
                            sx={{
                                width: { md: "200px", lg: '210px', xl: "255px" },
                                marginTop: 2,
                                height: 400,
                                objectFit: 'contain',
                            }}
                        />
                    </StepCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StepCard step="Step 3" description="Click on delete account">
                        <Image
                            component="img"
                            src={Image3}
                            alt="Step 3 Image"
                            sx={{
                                width: { md: "200px", lg: '210px', xl: "255px" },
                                marginTop: 2,
                                height: 400,
                                objectFit: 'contain',
                            }}
                        />
                    </StepCard>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StepCard step="Step 4" description="Click on delete option">
                        <Image
                            component="img"
                            src={Image4}
                            alt="Step 4 Image"
                            sx={{
                                width: { md: "200px", lg: '210px', xl: "255px" },
                                marginTop: 2,
                                height: 400,
                                objectFit: 'contain',
                            }}
                        />
                    </StepCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DeleteAccountSteps;
