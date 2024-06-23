// VotingPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const VotingPage = ({ event }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleVote = () => {
    // Логіка для голосування
  };

  return (
    <Container>
      <h2>Голосування за подію</h2>
      <Label>Оберіть дату</Label>
      {event.dates.map(date => (
        <div key={date}>
          <input
            type="radio"
            id={date}
            name="date"
            value={date}
            onChange={e => setSelectedDate(e.target.value)}
          />
          <label htmlFor={date}>{date}</label>
        </div>
      ))}
      <Button onClick={handleVote}>Проголосувати</Button>
    </Container>
  );
};

export default VotingPage;
