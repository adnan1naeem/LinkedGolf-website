'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link, Box, IconButton } from '@mui/material';

const Header = () => {

    const socialMediaIcons = [
        { href: 'https://www.facebook.com/LinkedGolfApp', src: '/facebook.svg', alt: 'Facebook', color: '#1877F2' },
        { href: 'https://www.instagram.com/linkedgolfapp/?hl=en', src: '/instagram.svg', alt: 'Instagram', color: '#E1306C' },
        { href: '#', src: '/twitter.svg', alt: 'Twitter', color: '#1DA1F2' },
        { href: '#', src: '/linkedin.svg', alt: 'LinkedIn', color: '#0A66C2' },
        { href: '#', src: '/rabbit.svg', alt: 'Reddit', color: '#FF4500' },
    ];

    return (
        <Box
            sx={{
                backgroundColor: 'transparent',
                paddingTop: 2,
            }}
        >
            <Box
                component="header"
                sx={{
                    backgroundColor: '#E4F3E0',
                    marginLeft: '10%',
                    marginRight: '10%',
                    borderRadius: 50,
                    height:{sm:'70px',md:"70px",lg:"70px"},
                    padding: {xs:1,sm:1,md:1,ld:1},
                }}
            >
                    <Box
                        component="nav"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: {xs:'center',sm:"center",md:"space-between",lg:'space-between'},
                            paddingLeft: '2%',
                            paddingRight: '2%',
                        }}
                    >
                        <Link href="/" sx={{ flexShrink: 0, }}>
                            <Image
                                src="/Vector.svg"
                                width={140}
                                height={70}
                                alt="header-logo"
                            />
                        </Link>
                        <Box sx={{ display: {xs:"none",sm:"none",md:'flex',lg:'flex'}, gap: 2, }}>
                            {socialMediaIcons.map((icon, index) => (
                                <IconButton
                                    key={index}
                                    href={icon.href}
                                    sx={{
                                        bgcolor: 'white',
                                        height: 35,
                                        width: 35,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%',
                                        '&:hover': { opacity: 0.75 },
                                    }}
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        style={{ width: '90%', height: '90%' }}
                                    />
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
            </Box>
        </Box>
    );
};

export default Header;
