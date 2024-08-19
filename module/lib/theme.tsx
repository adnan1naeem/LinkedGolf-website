"use client";
import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';

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
          fontFamily: 'Inter',
        },
      },
    },
  },
});

export default theme;
