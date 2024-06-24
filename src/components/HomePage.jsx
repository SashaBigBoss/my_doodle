import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState({ totalEvents: 0, totalVotes: 0 });

  useEffect(() => {
    // Приклад даних
    const exampleEvents = [
      { id: 1, title: 'Подія 1', description: 'Опис події 1' },
      { id: 2, title: 'Подія 2', description: 'Опис події 2' },
    ];
    setEvents(exampleEvents);
    setStats({ totalEvents: exampleEvents.length, totalVotes: 10 });
  }, []);

  return (
    <Container>
      <h2>Події</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>Всього подій: {stats.totalEvents}</p>
        <p>Всього голосів: {stats.totalVotes}</p>
      </div>
    </Container>
  );
};

export default HomePage;
