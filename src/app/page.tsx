import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HomeScreen from './homeScreen/index'; // Import with correct capitalization
import Header from '@/component/Header/Header';
import theme from './../../module/lib/theme'; // Adjust the path to where you define your theme

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ flex: 1, background: 'linear-gradient(180deg, #EFFFE7 5%, #E7F2FF 100%)' }}>
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
}

export default Home;
