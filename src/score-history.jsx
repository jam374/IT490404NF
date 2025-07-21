import React, { useEffect, useState } from 'react';
import '../CSS/ScoreFeatures.css';

const ScoreHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/scores/history');
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error('Error fetching score history:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="score-history">
      <h2>Score History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            Date: {new Date(item.timestamp).toLocaleString()} | Score: {item.score} | Time: {item.timeTaken}s
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreHistory;
