// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventCreation from './EventCreation';
import VotingPage from './VotingPage';
import HomePage from './HomePage';
// import SocialLogin from './SocialLogin';

const App = () => {
  return (
    <Router basename="/my_doodle">
      <Routes>
        <Route path="/create" element={<EventCreation />} />
        <Route path="/vote/:eventId" element={<VotingPage />} />
        {/* <Route path="/login" element={<SocialLogin />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
