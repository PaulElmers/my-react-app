import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  return (
    <div>
      <textarea 
        placeholder="Enter your feedback" 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)} 
      />
      <p>Your feedback: {feedback}</p>
    </div>
  );
};

export default FeedbackForm;
