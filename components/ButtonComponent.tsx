import React from 'react';
import Image from 'next/image';

interface ButtonComponentProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    href: string; // Changed from `onClick` to `href` for navigation
    iconState: boolean;
    style?: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ variant, children, href, iconState, style, ...props }) => {
    const buttonStyles: React.CSSProperties = {
        backgroundColor: variant === 'primary' ? '#1976d2' : 'transparent',
        color: variant === 'primary' ? '#ffffff' : '#0B7DE6',
        border: variant === 'secondary' ? '1px solid #0B7DE6' : 'none',
        padding: '15px 20px',
        justifyContent: 'center',
        borderRadius: '100px',
        fontSize: '18px',
        fontWeight: 500,
        textTransform: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textDecoration: 'none', // Ensures no underline on links
        ...style,
    };

    const hoverStyles: React.CSSProperties = variant === 'primary'
        ? { backgroundColor: '#115293' } // Darker shade for primary
        : { backgroundColor: '#e0f2f1' }; // Light background for secondary

    const combinedStyles: React.CSSProperties = {
        ...buttonStyles,
        // Unfortunately, inline styles do not support `:hover`, so this will be a static style
    };

    const getIcon = () => {
        if (!iconState) return null;
        return variant === 'primary'
            ? <Image src={'/apple.svg'} alt="Apple" width={24} height={24} />
            : <Image src={'/android-logo.svg'} alt="Android" width={24} height={24} />;
    };

    return (
        <a
            href={href}
            style={combinedStyles}
            {...props}
        >
            {children}
            {getIcon()}
        </a>
    );
};

export default ButtonComponent;
