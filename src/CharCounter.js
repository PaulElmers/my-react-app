import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
