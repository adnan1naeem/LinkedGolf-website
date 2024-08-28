import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create an Emotion cache instance with a key to identify the cache
const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;
