import React, { useEffect, useState, useRef } from 'react';
import './Count.css';

const Counter = (props) => {
  const { type, number, duration } = props.data;

  // States for the counters
  const [minCount, setMinCount] = useState('0');
  const [maxCount, setMaxCount] = useState('0');
  // Reference to the counter section
  const counterRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  // Function to handle scroll events and set the `inViewport` state
  const handleScroll = () => {
    const top = counterRef.current.getBoundingClientRect().top;
    const bottom = counterRef.current.getBoundingClientRect().bottom;

    // Check if the counter section is in the viewport
    if (top >= 0 && bottom <= window.innerHeight) {
      setInViewport(true);
    } else {
      setInViewport(false);
    }
  };

  // Add the scroll event listener and clean it up
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Counter logic when inViewport is true
  useEffect(() => {
    if (!inViewport) {
      return;
    }

    // If the number is in the format of a range
    if (number.includes('-')) {
      const [min, max] = number.split('-');

      // Minimum counter
      const minEnd = parseInt(min);
      let minStart = 0;
      let totalMilSecDurMin = parseInt(duration);
      let minIncrementTime = (totalMilSecDurMin / (minEnd - minStart)) * 1000;

      const minTimer = setInterval(() => {
        minStart += 1;
        setMinCount(`${minStart}`);
        if (minStart === minEnd) clearInterval(minTimer);
      }, minIncrementTime);

      // Maximum counter
      const maxEnd = parseInt(max);
      let maxStart = 0;
      let totalMilSecDurMax = parseInt(duration);
      let maxIncrementTime = (totalMilSecDurMax / (maxEnd - maxStart)) * 1000;

      const maxTimer = setInterval(() => {
        maxStart += 1;
        setMaxCount(`${maxStart}${type}`);
        if (maxStart === maxEnd) clearInterval(maxTimer);
      }, maxIncrementTime);

      // Cleanup functions
      return () => {
        clearInterval(minTimer);
        clearInterval(maxTimer);
      };
    } else {
      // If the number is a single value, just set the counts directly
      setMinCount(number);
      setMaxCount(number);
     
    }
  }, [number, duration, type, inViewport]);

  // Counter section div with reference
  return (
    <div className="Count" ref={counterRef}>
      <h3>
        {minCount} - {maxCount}
      </h3>
    </div>
  );
};

export default Counter;
