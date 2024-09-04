import React, { useEffect, useState } from 'react';
import ButtonComponent from './ButtonComponent';

// Custom hook to handle media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

const DownloadButtons: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const isExtraSmallScreen = useMediaQuery("(max-width: 600px)");
  const isLargeScreen = useMediaQuery("(max-width: 1200px)");
  const isAbove601px = useMediaQuery('(min-width: 601px)');

  // Combine the results to check if the width is between 601px and 1200px
  const isInRange = isLargeScreen && isAbove601px;

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isSmallScreen || isLargeScreen ? 'column' : 'row',
    justifyContent: isSmallScreen ? 'center' : 'flex-start',
    alignItems: 'center',
    gap: isSmallScreen ? '8px' : '16px',
    marginTop: isSmallScreen ? '16px' : '32px',
  };

  const buttonStyles: React.CSSProperties = {
    flex: 1,
    maxWidth: '100%',
    width: isInRange ? '50%' : isExtraSmallScreen ? '78%' : isSmallScreen ? '50%' : 'auto',
  };

  return (
    <div style={containerStyles}>
      <ButtonComponent
        variant="primary"
        iconState={true}
        href='https://apps.apple.com/us/app/linked-golf/id1619093321'
        style={buttonStyles}
      >
        Download for iOS
      </ButtonComponent>
      <ButtonComponent
        variant="secondary"
        iconState={true}
        href='https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile'
        style={buttonStyles}
      >
        Download for Android
      </ButtonComponent>
    </div>
  );
};

export default DownloadButtons;
