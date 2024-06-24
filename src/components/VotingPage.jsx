import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/VotingPageStyles';

const VotingPage = () => {
  const { eventId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const event = {
    id: 1,
    title: 'Зустріч команди',
    description: 'Обговорення проекту',
    dates: ['2024-06-25T10:00', '2024-06-26T14:00'],
  };

  const handleVote = date => {
    setSelectedDate(date);
  };

  return (
    <Container>
      <h1>Голосування за {event.title}</h1>
      <p>{event.description}</p>
      <ul>
        {event.dates.map(date => (
          <li key={date}>
            <button onClick={() => handleVote(date)}>{date}</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default VotingPage;
