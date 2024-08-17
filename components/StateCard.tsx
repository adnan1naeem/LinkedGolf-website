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
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
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
    backgroundColor: '#E7F3FF',
});

const StatCard: React.FC<StatCardProps> = ({ count, label, isHighlight }) => {
    return (
        <Box component="div" sx={{ margin: '8px' }}>
            {isHighlight ? (
                <HighlightCard>
                    <Typography fontSize={{xs:"28px",md:"30px",lg:"40px"}} sx={{ fontWeight: 'bold',color:'#2A2A2A' }}>
                        {count}
                    </Typography>
                    <Typography fontSize={{xs:"20px",md:"30px",lg:"40px"}} fontFamily={"Barlow-Medium"} sx={{ color:'#2A2A2A' }} >{label}</Typography>
                </HighlightCard>
            ) : (
                <RegularCard>
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
        <Box display="flex" sx={{justifyContent:'center'}}>
            <StatCard count="15,000" label="Courses" isHighlight />
            <StatCard count="100,000+" label="Golfers" />
        </Box>
    );
};

export default StatsSection;
