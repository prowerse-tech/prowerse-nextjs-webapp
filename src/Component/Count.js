import React, { useEffect, useState, useRef } from 'react';
import './Count.css';

const Count = (props) => {
  const { type, number, duration } = props.data;
  const [inViewport, setInViewport] = useState(false);
  const countRef = useRef(null);
  const [count, setCount] = useState('0');

  // Handle scroll event to detect when the count section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const top = countRef.current.getBoundingClientRect().top;
      const bottom = countRef.current.getBoundingClientRect().bottom;

      // Check if the count section is in the viewport
      setInViewport(top >= 0 && bottom <= window.innerHeight);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle counter logic
  useEffect(() => {
    if (!inViewport) {
      // Don't start counting if the section is not in the viewport
      return;
    }

    let start = 0;
    let typeSign = type;
    let end;

    // Determine the end value
    if (number.includes('-')) {
      const [max] = number.split('-');
      end = parseInt(max);
      typeSign = type;
    } else {
      end = parseInt(number);
    }

    // Return if start and end are the same
    if (start === end) return;

    // Calculate duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / (end - start)) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setCount(`${start}${typeSign}`);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    // Cleanup function
    return () => clearInterval(timer);
    
  }, [number, duration, type, inViewport]);

  return (
    <div className="Count" ref={countRef}>
      <h3>{count}</h3>
    </div>
  );
};

export default Count;
