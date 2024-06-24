import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventList from './EventList';
import CreateEvent from './CreateEvent';
import VotingPage from './VotingPage';
import Header from './Header'; // Імпортуємо компонент хедера
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header /> {/* Додаємо хедер */}
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/vote/:eventId" element={<VotingPage />} />
      </Routes>
      {/* <SocialLogin /> */}
    </>
  );
};

export default App;

// error 2
