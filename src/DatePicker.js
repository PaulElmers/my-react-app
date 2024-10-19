import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <input 
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
      />
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
};

export default DatePicker;
