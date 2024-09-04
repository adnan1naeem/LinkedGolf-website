'use client';
import { Link as MuiLink, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

interface LinkComponentProps {
    variant: 'primary' | 'secondary';
    children: ReactNode;
    href: string;
    iconState: boolean;
    sx?: SxProps<Theme>;
}

const buttonStyles: Record<'primary' | 'secondary', SxProps<Theme>> = {
    primary: {
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        padding: { sx:"5px 10px",sm: "5px 10px", md: '10px 20px', lg: '10px 20px' },
        borderRadius: 100,
        fontSize: {xs:12, sm: 10, md: 18, lg: 18 },
        fontWeight: 500,
        textTransform: 'none',
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
        '&:hover': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
        },
    },
    secondary: {
        backgroundColor: 'transparent',
        color: '#0B7DE6',
        padding: { sx:"5px 10px",sm: "5px 10px", md: '10px 20px', lg: '10px 20px' },
        border: '1px solid #0B7DE6',
        textTransform: 'none',
        borderRadius: 100,
        fontSize: {xs:12, sm: 10, md: 18, lg: 18 },
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
    },
};

const LinkComponent: React.FC<LinkComponentProps> = ({ variant, children, href, sx = {}, iconState, ...props }) => {
    const combinedStyles = {
        ...buttonStyles[variant],
        ...sx,
        textDecoration: 'none', // Ensure no underline on links
    } as SxProps<Theme>;

    const getIcon = () => {
        if (!iconState) return null;
        return variant === 'primary'
            ? <Image src={'/apple.svg'} style={{ marginLeft: "10px" }} alt="Apple" width={24} height={24} />
            : <Image src={'/android-logo.svg'} style={{ marginLeft: "10px" }} alt="Android" width={24} height={24} />;
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

export default LinkComponent;
