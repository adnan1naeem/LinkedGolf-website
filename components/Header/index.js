import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link, Box, IconButton } from '@mui/material';
import logo from './../../assets/Vector.svg'
import { SocialMediaPlatforms } from '../../mocks/socialMediaPlatforms';
const Header = () => {

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
                                src={logo}
                                width={140}
                                height={60}
                                alt="header-logo"
                            />
                        </Link>
                        <Box sx={{ display: {xs:"none",sm:"none",md:'flex',lg:'flex'}, gap: 2, }}>
                        {SocialMediaPlatforms.map((link) => (
                                <IconButton
                                    href={link.href}
                                    sx={{
                                        bgcolor: 'white',
                                        height: 35,
                                        width: 35,
                                        display: 'flex',
                                        borderRadius: '50%',
                                        '&:hover': { opacity: 0.75 },
                                    }}
                                >
                                     <Image src={link.image} alt={link.alt} height={33} width={33} />
                                </IconButton>
                            ))}
                        </Box>
                    </Box>
            </Box>
        </Box>
    );
};

export default Header;
