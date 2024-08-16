"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from '@mui/material';
const Header = () => {
    const [isMdUp, setIsMdUp] = useState<boolean>(window?.innerWidth >= 900);
    const socialMediaIcons = [
        { href: '#', src: '/facebook.svg', alt: 'Facebook', color: '#1877F2' },
        { href: '#', src: '/instagram.svg', alt: 'Instagram', color: '#E1306C' },
        { href: '#', src: '/twitter.svg', alt: 'Instagram', color: '#E1306C' },
        { href: '#', src: '/linkedin.svg', alt: 'LinkedIn', color: '#0A66C2' },
        { href: '#', src: '/rabbit.svg', alt: 'Reddit', color: '#FF4500' },
    ];
    useEffect(() => {
        const handleResize = () => {
            setIsMdUp(window.innerWidth >= 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div style={{ backgroundColor: "transparent", paddingTop: 20 }}>
            <header
                style={{
                    backgroundColor: "#E4F3E0",
                    marginLeft: '10%',
                    marginRight: '10%',
                    borderRadius: 50,
                    padding: '10px'
                }}
                className="mt-10"
            >
                {isMdUp ? (
                    <nav className="flex items-center lg:flex-row" style={{ backgroundColor: '#E4F3E0', justifyContent: 'space-between', paddingLeft: '2%', paddingRight: "2%" }}>
                        <div className="flex w-full md:w-auto">
                            <Link href="/" >
                                <Image
                                    src="/Vector.svg"
                                    width={140}
                                    height={70}
                                    alt="header-logo"
                                    className="md:w-40 xl:w-72"

                                />
                            </Link>
                        </div>

                        <div className="flex space-x-4 mt-4 sm:mt-0 md:hidden">
                            {socialMediaIcons.map((icon, index) => (
                                <Link
                                    key={index}
                                    href={icon.href}
                                    className="hover:opacity-75"
                                    sx={{ bgcolor: 'white', height: 35, width: 35, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 50,marginRight:2 }}
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        style={{
                                            width: '60%',
                                            height: '60%',
                                        }}
                                    />
                                </Link>
                            ))}
                        </div>

                    </nav>
                ) : <nav className="flex items-center lg:flex-row" style={{ backgroundColor: '#E4F3E0', justifyContent: 'center', paddingLeft: '2%', paddingRight: "2%" }}>
                    <div className="flex w-full md:w-auto">
                        <Link href="/" >
                            <Image
                                src="/Vector.svg"
                                width={140}
                                height={70}
                                alt="header-logo"
                                className="md:w-40 xl:w-72"

                            />
                        </Link>
                    </div>
                </nav>}

            </header>
        </div>
    );
};

export default Header;
