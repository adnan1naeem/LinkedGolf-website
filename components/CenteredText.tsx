import React from 'react';
import { Box, Typography } from '@mui/material';

const CenteredText = ({ heading, description }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 4,
                height: '100%',
                minHeight: {xs:"300px",sm:"300px",md:"300px",lg:'400px',}
            }}
        >
            <Typography fontSize={{ xs: "28px", sm: "28px", md: "40px", lg: "63px", xl: "63px" }} fontWeight={"bold"} color={"#2A2A2A"} gutterBottom>
                {heading}
            </Typography>
            <Typography sx={{ maxWidth: { xs: '100%', sm: '90%', md: '70%', lg: '60%', xl: '45.3%' }, fontSize: { xs: '16px', md: '18px', lg: '18px' } }} fontFamily={"Barlow-Medium"} color={"#2A2A2A"} variant="body1">
                {description}
            </Typography>
        </Box>
    );
};

export default CenteredText;
