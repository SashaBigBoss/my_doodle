import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventList from './EventList';
import CreateEvent from './CreateEvent';
import VotingPage from './VotingPage';
import SocialLogin from './SocialLogin';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/vote/:eventId" element={<VotingPage />} />
      </Routes>
      <SocialLogin />
    </>
  );
};

export default App;
