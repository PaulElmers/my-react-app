import React, { useState } from 'react';
import './AnimatedButton.css';

const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <button 
      className={`animated-btn ${clicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      {clicked ? 'Clicked!' : 'Click me!'}
    </button>
  );
};

export default AnimatedButton;
