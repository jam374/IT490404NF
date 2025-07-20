import React from 'react';
import axios from 'axios';

const SaveScore = ({ score, timeTaken, questions, username = 'Guest' }) => {
  const handleSave = async () => {
    try {
      const response = await axios.post('/api/scores/save', {
        score,
        timeTaken,
        questions,
        username,
        timestamp: new Date().toISOString()
      });
      alert('Score saved successfully!');
    } catch (error) {
      alert('Error saving score.');
      console.error(error);
    }
  };

  return (
    <button onClick={handleSave} className="btn btn-primary">
      Save Score
    </button>
  );
};

export default SaveScore;