import { createTheme } from '@mui/material/styles';

// Create a custom theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#0b7de6', // Primary color (light blue)
    },
    secondary: {
      main: '#032f5b', // Secondary color (dark blue)
    },
    error: {
      main: '#ff1744', // Error color
    },
    warning: {
      main: '#ff9800', // Warning color
    },
    info: {
      main: '#2196f3', // Info color
    },
    success: {
      main: '#4caf50', // Success color
    },
    background: {
      default: '#f1f8ff', // Default background color (sky blue)
      paper: '#ffffff', // Background color for paper components
    },
  },
  typography: {
    fontFamily: '"Roboto", "Roboto Slab", sans-serif', // Primary font
    h1: {
      fontFamily: '"Pacifico", cursive', // Custom font for h1
      fontSize: '3rem',
      fontWeight: 700,
      color: '#032f5b',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#032f5b',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#0b7de6',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8, // Global border radius for components
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border radius for buttons
          padding: '8px 16px',
        },
        containedPrimary: {
          backgroundColor: '#0b7de6',
          '&:hover': {
            backgroundColor: '#0a6dc2',
          },
        },
        containedSecondary: {
          backgroundColor: '#032f5b',
          '&:hover': {
            backgroundColor: '#021d3f',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#032f5b',
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
