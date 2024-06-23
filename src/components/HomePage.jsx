// HomePage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState({ totalEvents: 0, totalVotes: 0 });

  useEffect(() => {
    // Логіка для завантаження подій та статистики
  }, []);

  const getRandomEvent = () => {
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  };

  const mostPopularEvent = () => {
    return events.reduce(
      (max, event) => (event.votes > max.votes ? event : max),
      events[0]
    );
  };

  const leastPopularEvent = () => {
    return events.reduce(
      (min, event) => (event.votes < min.votes ? event : min),
      events[0]
    );
  };

  return (
    <Container>
      <h2>Події</h2>
      <Button onClick={() => console.log(getRandomEvent())}>
        Випадкова подія
      </Button>
      <Button onClick={() => console.log(mostPopularEvent())}>
        Найпопулярніша подія
      </Button>
      <Button onClick={() => console.log(leastPopularEvent())}>
        Найменш популярна подія
      </Button>

      <h3>Статистика</h3>
      <p>Всього створено подій: {stats.totalEvents}</p>
      <p>Всього користувачів проголосувало: {stats.totalVotes}</p>

      <h3>Перелік подій</h3>
      {events.map(event => (
        <div key={event.id}>
          <h4>{event.description}</h4>
          <p>Дати: {event.dates.join(', ')}</p>
          <p>Голосів: {event.votes}</p>
        </div>
      ))}
    </Container>
  );
};

export default HomePage;
