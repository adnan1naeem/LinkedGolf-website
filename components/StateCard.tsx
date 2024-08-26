import React from 'react';
import { Box, Typography, styled } from '@mui/material';

interface StatCardProps {
    count: string;
    label: string;
    isHighlight?: boolean;
}

const Card = styled(Box)(({ theme }) => ({
    width: 295,
    height: 165,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    boxShadow: '5px 5px 14px #0B7DE626',
    [theme.breakpoints.down('xl')]: {
        width: 250,
    },
    [theme.breakpoints.down('md')]: {
        width: 180,
        height: 140
    },
    [theme.breakpoints.down('sm')]: {
        width: 150,
        height: 120
    }
}));

const HighlightCard = styled(Card)({
    backgroundColor: '#F3FBF0',
});

const RegularCard = styled(Card)({
    backgroundColor: '#DAECFD',
});

const StatCard: React.FC<StatCardProps> = ({ count, label, isHighlight }) => {
    return (
        <Box component="div" sx={{ marginTop: '8px',marginBottom:'8px' }}>
            {isHighlight ? (
                <HighlightCard>
                    <Typography fontSize={{xs:"28px",md:"30px",lg:"40px"}} sx={{ fontWeight: 'bold',color:'#2A2A2A' }}>
                        {count}
                    </Typography>
                    <Typography fontSize={{xs:"20px",md:"30px",lg:"40px"}} fontFamily={"Barlow-Medium"} sx={{ color:'#2A2A2A' }} >{label}</Typography>
                </HighlightCard>
            ) : (
                <RegularCard sx={{marginLeft:'16px'}}>
                    <Typography fontSize={{xs:"28px",md:"30px",lg:"40px"}} sx={{ fontWeight: '700',color:'#2A2A2A' }}>
                        {count}
                    </Typography>
                    <Typography fontSize={{xs:"20px",md:"30px",lg:"40px"}} fontFamily={"Barlow-Medium"} fontWeight={"300"} sx={{color:'#2A2A2A' }} >{label}</Typography>
                </RegularCard>
            )}
        </Box>
    );
};

const StatsSection: React.FC = () => {
    return (
        <Box display="flex" >
            <StatCard count="15,000" label="Courses" isHighlight />
            <StatCard count="100,000+" label="Golfers" />
        </Box>
    );
};

export default StatsSection;
