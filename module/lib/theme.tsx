// src/theme.ts
"use client";
import { createTheme } from '@mui/material/styles';
import '@fontsource/inter'; // Import the font

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter', // Set Inter font for Button
        },
      },
    },
    // Add other component style overrides if needed
  },
});

export default theme;
