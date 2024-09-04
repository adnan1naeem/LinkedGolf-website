import React, { useState, useEffect } from 'react';
import ButtonComponent from './ButtonComponent';

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
  const iosText = isSmallScreen || isExtraSmallScreen? "Download for" : "Download for iOS";
  const androidText = isSmallScreen || isExtraSmallScreen ? "Download for" : "Download for Android";
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    justifyContent: isSmallScreen ? 'center' : 'flex-start',
    alignItems: 'center',
    gap: isSmallScreen ? '8px' : '16px',
    marginTop: isSmallScreen ? '16px' : '32px',
  };

  const buttonStyles: React.CSSProperties = {
    flex: 1,
    maxWidth: '100%',
    width: isExtraSmallScreen ? '80%' : isSmallScreen ? '50%' : 'auto',
  };

  return (
    <div style={containerStyles}>
      <ButtonComponent
        variant="primary"
        iconState={true}
        onClick={() => window.open('https://apps.apple.com/us/app/linked-golf/id1619093321', '_blank')}
        style={buttonStyles}
      >
        {iosText}
      </ButtonComponent>
      <ButtonComponent
        variant="secondary"
        iconState={true}
        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.linkedgolfapp.mobile', '_blank')}
        style={buttonStyles}
      >
        {androidText}
      </ButtonComponent>
    </div>
  );
};

export default DownloadButtons;
