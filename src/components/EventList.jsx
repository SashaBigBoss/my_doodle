import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../styles/EventListStyles';

const EventList = () => {
  const events = [
    {
      id: 1,
      title: 'Зустріч команди',
      description: 'Обговорення проекту',
      votes: 5,
    },
  ];

  return (
    <Container>
      <h1>Події</h1>
      <Link to="/create">
        <Button>Створити подію</Button>
      </Link>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/vote/${event.id}`}>
              {event.title} - {event.votes} голосів
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default EventList;
