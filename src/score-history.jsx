import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/ScoreFeatures.css';

const ScoreHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('/api/scores/history')
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
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