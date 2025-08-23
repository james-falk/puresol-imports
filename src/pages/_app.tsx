import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import {
  initMagneticHover,
  initParallaxEffects,
  initScrollAnimations,
} from '../utils/scrollAnimations';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Initialize animations after component mount
    const timer = setTimeout(() => {
      initScrollAnimations();
      initParallaxEffects();
      initMagneticHover();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
