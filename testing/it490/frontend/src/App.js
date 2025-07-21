import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration';
import ProfilePage from './components/ProfilePage';

import SaveScoreRoute from './routes/SaveScore';
import ScoreHistoryRoute from './routes/ScoreHistory';
import LeaderboardRoute from './routes/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/save-score" element={<SaveScoreRoute />} />
        <Route path="/score-history" element={<ScoreHistoryRoute />} />
        <Route path="/leaderboard" element={<LeaderboardRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
