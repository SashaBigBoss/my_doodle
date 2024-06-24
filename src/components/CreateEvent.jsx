import React, { useState } from 'react';
import { Container, Input, Button } from '../styles/CreateEventStyles';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dates, setDates] = useState(['']);
  const [votingPeriod, setVotingPeriod] = useState('');

  const handleAddDate = () => {
    setDates([...dates, '']);
  };

  const handleDateChange = (index, value) => {
    const newDates = [...dates];
    newDates[index] = value;
    setDates(newDates);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>Створити подію</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Назва події"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Опис події"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <h2>Дати</h2>
        {dates.map((date, index) => (
          <Input
            key={index}
            type="datetime-local"
            value={date}
            onChange={e => handleDateChange(index, e.target.value)}
            required
          />
        ))}
        <Button type="button" onClick={handleAddDate}>
          Додати дату
        </Button>
        <h2>Період голосування</h2>
        <Input
          type="datetime-local"
          value={votingPeriod}
          onChange={e => setVotingPeriod(e.target.value)}
          required
        />
        <Button type="submit">Зберегти подію</Button>
      </form>
    </Container>
  );
};

export default CreateEvent;
