import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import CustomButton from './CustomButton';
import ButtonComponent from './ButtonComponent';
import LinkComponent from './ButtonComponent';



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
      marginTop={{ xs: 4, xl: 5 }}
    >
      <LinkComponent
        variant="primary"
        href='https://apps.apple.com/us/app/linked-golf/id1619093321'
        iconState={true}
        sx={{ width: { xs: '50%', sm: '50%', md: '60%', lg: 'auto' },height:50,fontWeight:500 }}
      >
        Download for iOS
      </LinkComponent>
      <LinkComponent
        variant="secondary"
        href='https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile'
        iconState={true}
        sx={{ width: { xs: '50%', sm: '50%', md: '60%', lg: 'auto' },height:50,fontWeight:500  }}
      >
        Download for Android
      </LinkComponent>
    </Box>
  );
};

export default DownloadButtons;
