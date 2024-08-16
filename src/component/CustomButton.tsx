'use client';
import { Button, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import Apple from './../../public/apple.svg';
import Android from './../../public/android-logo.svg';
import Image from "next/image";

interface CustomButtonProps {
    variant: 'primary' | 'secondary';
    children: ReactNode;
    onClick: () => void;
    iconState:Boolean;
    sx?: SxProps<Theme>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant, children, onClick, sx,iconState, ...props }) => {
    const buttonStyles = {
        primary: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            padding: '10px 20px',
            borderRadius: 100,
            fontSize: 18,
            fontWeight: 500,
            textTransform: 'none',
            '&:hover': {
                backgroundColor: 'primary.main',
                border: '1px solid #0B7DE6',
                color: 'primary.contrastText',
            },
        },
        secondary: {
            backgroundColor: 'transparent',
            color: '#0B7DE6',
            padding: '10px 20px',
            border: '1px solid #0B7DE6',
            textTransform: 'none',
            borderRadius: 100,
            fontSize: 18,
            fontWeight: 500,
        },
    };

    // Merge the `sx` prop with the button styles
    const combinedStyles = {
        ...buttonStyles[variant],
        ...sx, // Merge the `sx` prop here
    };

    const getIcon = () => {
        return iconState?variant === 'primary'
            ? <Image src={Apple} alt="Apple" width={24} height={24} />
            : <Image src={Android} alt="Android" width={24} height={24} />:null;
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

export default CustomButton;
