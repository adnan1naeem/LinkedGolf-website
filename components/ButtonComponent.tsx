// 'use client';
import { Button, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

interface ButtonComponentProps {
    variant: 'primary' | 'secondary';
    children: ReactNode;
    onClick: () => void;
    iconState: boolean;
    sx?: SxProps<Theme>;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ variant, children, onClick, sx = {}, iconState, ...props }) => {
    const buttonStyles: Record<'primary' | 'secondary', SxProps<Theme>> = {
        primary: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            padding: {sm:"5px 10px",md:'10px 20px',lg:'10px 20px'},
            borderRadius: 100,
            fontSize: {sm:10,md:18,lg:18},
            fontWeight: 500,
            textTransform: 'none',
            '&:hover': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
            },
        },
        secondary: {
            backgroundColor: 'transparent',
            color: '#0B7DE6',
            padding: {sm:"5px 10px",md:'10px 20px',lg:'10px 20px'},
            border: '1px solid #0B7DE6',
            textTransform: 'none',
            borderRadius: 100,
            fontSize: {sm:10,md:18,lg:18},
            fontWeight: 500,
        },
    };

    const combinedStyles = {
        ...buttonStyles[variant],
        ...sx,
    } as SxProps<Theme>;

    const getIcon = () => {
        if (!iconState) return null;
        return variant === 'primary'
            ? <Image src={'/apple.svg'} alt="Apple" width={24} height={24} />
            : <Image src={'/android-logo.svg'} alt="Android" width={24} height={24} />;
    };

    return (
        <Button
            sx={combinedStyles}
            onClick={onClick}
            endIcon={getIcon()}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonComponent;
