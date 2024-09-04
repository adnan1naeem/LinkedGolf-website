import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import CustomButton from './CustomButton'; 
import ButtonComponent from './ButtonComponent';



const DownloadButtons: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const iosText = isSmallScreen ? "Download for" : "Download for iOS";
  const androidText = isSmallScreen ? "Download for" : "Download for Android";
  return (
    <Box
      display="flex"
      justifyContent={{ xs: 'flex-start', md: 'center', lg: 'flex-start' }}
      flexDirection={{ xs: 'row', lg: 'row' }}
      alignSelf={{ md: 'center' }}
      gap={2}
      marginTop={{xs:4,xl:5}}
    >
      <ButtonComponent
        iconState={true}
        variant="primary"
        onClick={() => window.open('https://apps.apple.com/us/app/linked-golf/id1619093321', '_blank')}
        sx={{ width: { xs: '50%', sm: '50%', md: '60%', lg: 'auto' } }}
      >
        {iosText}
      </ButtonComponent>
      <ButtonComponent
        iconState={true}
        variant="secondary"
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile', '_blank')}
        sx={{ width: { xs: '50%', sm: '50%', md: '60%', lg: 'auto' } }}
      >
         {androidText}
      </ButtonComponent>
    </Box>
  );
};

export default DownloadButtons;
