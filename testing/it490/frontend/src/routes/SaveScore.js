import React from 'react';
import SaveScore from '../components/SaveScore';

const SaveScoreRoute = () => {
  return (
    <div className="page-container">
      <SaveScore score={88} timeTaken={45} questions={['Q1', 'Q2']} username="Player1" />
    </div>
  );
};

export default SaveScoreRoute;
