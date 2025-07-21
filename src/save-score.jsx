import React from 'react';

const SaveScore = ({ score, timeTaken, questions, username = 'Guest' }) => {
  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/scores/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          score,
          timeTaken,
          questions,
          username,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        alert('Score saved successfully!');
      } else {
        alert('Failed to save score.');
      }
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
