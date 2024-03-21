// components/NumberCounter.jsx
import React, { useEffect, useRef, useState } from 'react';

const NumberCounter = ({ endValue }) => {
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offset = window.innerHeight / 2; // Adjust this offset as needed

      if (!isVisible && scrollY > offset) {
        setIsVisible(true);
      }
    };

    const startCounting = () => {
      const interval = setInterval(() => {
        countRef.current = countRef.current < endValue ? countRef.current + 1 : endValue;
        // Force a re-render with the updated count
        forceUpdate();
      }, 100);

      return () => clearInterval(interval);
    };

    window.addEventListener('scroll', handleScroll);

    if (isVisible) {
      // Start counting when isVisible is initially true
      return startCounting();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [endValue, isVisible]);

  // Dummy function to force a re-render when count changes
  const [, forceUpdate] = useState({});

  return (
    <div className={`text-4xl font-bold text-green-500 ${isVisible ? 'start-counting' : ''}`}>
      {countRef.current !== undefined ? countRef.current.toLocaleString() : '12'}
    </div>
  );
};

export default NumberCounter;
