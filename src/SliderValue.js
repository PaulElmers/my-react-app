import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
      />
      <p>Selected value: {value}</p>
    </div>
  );
};

export default Slider;
