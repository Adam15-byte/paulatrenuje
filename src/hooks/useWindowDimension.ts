import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const isBrowser = () => typeof window !== 'undefined';

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    isBrowser() && window.addEventListener('resize', handleResize);
    return () => {
      isBrowser() && window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
}
