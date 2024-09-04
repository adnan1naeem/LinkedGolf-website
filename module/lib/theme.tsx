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
      'sans-serif',
      'Barlow-Medium',
      'Quicksand-Bold',
      'Barlow-Regular',
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
