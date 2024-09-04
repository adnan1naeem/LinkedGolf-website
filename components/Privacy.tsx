import React from 'react';
import { Box, Container, Typography, List, ListItem, Link } from '@mui/material';
interface BulletPointLink {
    text: string;
    url: string;
}
interface InfoSectionProps {
    heading: string;
    description1: string;
    description2?: string;
    description3?: string;
    endDescription?: string;
    bulletPoints?: string[];
    contactInfo?: string;
    bulletPointLinks?: BulletPointLink[];
}

const PrivacyPolicyText: React.FC<InfoSectionProps> = ({
    heading,
    description1,
    description2,
    description3,
    bulletPoints,
    endDescription,
    bulletPointLinks,
    contactInfo,
}) => {
    return (
        <Box
            sx={{ textAlign: 'left' }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 6 }}>
                    <Typography fontSize={{ lg: '20px' }} color={"#2A2A2A"} sx={{ fontWeight: 'bold', mb: 2 }}>
                        {heading}
                    </Typography>

                    <Typography fontSize={{ lg: '16px' }} fontFamily={"Barlow"} fontWeight={'500'} sx={{ color: '#2A2A2A' }}>
                        {description1}
                    </Typography>

                    {description2 && (
                        <Typography fontSize={{ lg: '16px' }} fontFamily={"Barlow"} fontWeight={'500'} sx={{ color: '#2A2A2A' }}>
                            {description2}
                        </Typography>
                    )}

                    {description3 && (
                        <Typography fontSize={{ lg: '16px' }} fontFamily={"Barlow"} fontWeight={'500'} sx={{ color: '#2A2A2A' }}>
                            {description3}
                        </Typography>
                    )}

                    {bulletPoints && bulletPoints.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                            <List>
                                {bulletPoints.map((point, index) => (
                                    <ListItem key={index} sx={{ px: 0, color: "#2A2A2A", fontSize: '16px', fontFamily:"Barlow", fontWeight:500 }}>
                                        • {point}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                    {bulletPointLinks && bulletPointLinks.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                            <List>
                                {bulletPointLinks.map((link, index) => (
                                    <ListItem key={index} sx={{ px: 0, display: 'flex', alignItems: 'center' }}>
                                        <Typography
                                            sx={{
                                                color: 'blue',
                                                display: 'inline',
                                                '&:before': {
                                                    content: '"• "',
                                                    marginRight: 1,
                                                    color: '#0070D8',
                                                    textDecoration: 'none'
                                                },
                                            }}
                                        >
                                            <Link
                                                href={link?.url}
                                                sx={{ color: '#0070D8', textDecoration: 'underline' }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link?.text}
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                    {endDescription && (
                        <Typography fontSize={{ lg: '16px' }} fontFamily={"Barlow"} fontWeight={'500'} sx={{ color: '#2A2A2A' }}>
                            {endDescription}
                        </Typography>
                    )}
                    {contactInfo && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" sx={{ color: '#2A2A2A' }}>
                                {contactInfo.split('matthew.quatrani@gmail.com')[0]}
                                <Link
                                    href="mailto:matthew.quatrani@gmail.com"
                                    sx={{ color: '0070D8', textDecoration: 'underline' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    matthew.quatrani@gmail.com
                                </Link>
                                {contactInfo.split('matthew.quatrani@gmail.com')[1]}
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default PrivacyPolicyText;
