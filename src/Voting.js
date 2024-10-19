import React, { useState } from 'react';

const VotingSystem = () => {
  const [votes, setVotes] = useState(0);

  const upvote = () => setVotes(votes + 1);
  const downvote = () => setVotes(votes - 1);

  return (
    <div>
      <p>Votes: {votes}</p>
      <button onClick={upvote}>Upvote</button>
      <button onClick={downvote}>Downvote</button>
    </div>
  );
};

export default VotingSystem;
