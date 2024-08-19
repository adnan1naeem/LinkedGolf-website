import * as React from 'react';
import { Grid, Typography, Card, CardContent, Avatar, Stack, Container } from '@mui/material';

interface SectionProps {
    title: string;
    description: string;
    iconPath: string;
}

const sections: SectionProps[] = [
    {
        title: 'Golf Availability',
        description: 'Know who can golf',
        iconPath: '/calendar.svg',
    },
    {
        title: 'Golf Network',
        description: 'Golf more.',
        iconPath: '/people.svg',
    },
    {
        title: 'Course Communities',
        description: 'Stay connected.',
        iconPath: '/courses__24dp.svg',
    },
    {
        title: 'Golfer Profile',
        description: 'Find like golfers.',
        iconPath: '/GolfStyle.svg',
    }
];

function GolfSection({ title, description, iconPath }: SectionProps) {
    return (
        <Grid item xs={6} sm={6} md={6} lg={3} sx={{ bgcolor: 'transparent', border: 'none' }}>
            <Card sx={{ bgcolor: 'transparent', boxShadow: 'none', border: 'none' }}>
                <CardContent sx={{ bgcolor: 'transparent', padding: 2 }}>
                    <Stack direction="column" spacing={1}>
                        <Avatar
                            src={iconPath}
                            alt={`${title} icon`}
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: 'transparent',
                            }}
                        />
                        <Typography
                            fontSize={{ xs: 18, lg: 22 }}
                            fontFamily={"Inter, sans-serif"}
                            fontWeight={"bold"}
                            color={"#032F5B"}
                            component="div"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                    </Stack>
                    <Typography fontFamily={"Barlow-Regular"} color={"#032F5B"} fontSize={"18px"} mt={1}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

function GolfComponent() {
    return (
        <div style={{backgroundColor:"#DAECFD"}}>
            <Container maxWidth="lg" sx={{ bgcolor: '#DAECFD', py: 3 }}>
            <Grid
                container
                spacing={2}
                justifyContent="center"
            >
                {sections.map((section, index) => (
                    <GolfSection key={index} {...section} />
                ))}
            </Grid>
        </Container>
        </div>
    );
}

export default GolfComponent;