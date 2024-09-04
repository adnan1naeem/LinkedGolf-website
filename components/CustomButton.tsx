'use client';
import { Link as MuiLink, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

interface CustomLinkProps {
    variant: 'primary' | 'secondary';
    children: ReactNode;
    href: string;
    iconState: boolean;
    sx?: SxProps<Theme>;
}

const CustomLink: React.FC<CustomLinkProps> = ({ variant, children, href, sx = {}, iconState, ...props }) => {
    const linkStyles: Record<'primary' | 'secondary', SxProps<Theme>> = {
        primary: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            padding: '10px 20px',
            borderRadius: 100,
            fontSize: { md: 16, lg: 18 },
            fontWeight: 500,
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none', // Remove underline from link
        },
        secondary: {
            backgroundColor: 'transparent',
            color: '#0B7DE6',
            padding: '10px 20px',
            border: '1px solid #0B7DE6',
            textTransform: 'none',
            borderRadius: 100,
            fontSize: { md: 16, lg: 18 },
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none', // Remove underline from link
        },
    };

    const combinedStyles = {
        ...linkStyles[variant],
        ...sx,
    } as SxProps<Theme>;

    const getIcon = () => {
        if (!iconState) return null;
        return variant === 'primary'
            ? <Image src={'/apple.svg'} alt="Apple" width={24} height={24} style={{ marginLeft: '10px' }} />
            : <Image src={'/android-logo.svg'} alt="Android" width={24} height={24} style={{ marginLeft: '10px' }} />;
    };

    return (
        <MuiLink
            target="_blank"
            href={href}
            sx={combinedStyles}
            {...props}
        >
            {children}
            {getIcon()}
        </MuiLink>
    );
};

export default CustomLink;
