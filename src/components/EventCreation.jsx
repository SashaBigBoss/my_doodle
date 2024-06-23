// EventCreation.jsx
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

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const EventCreation = () => {
  const [description, setDescription] = useState('');
  const [dates, setDates] = useState('');
  const [votingPeriod, setVotingPeriod] = useState('');

  const handleSubmit = () => {
    // Логіка для збереження події
  };

  return (
    <Container>
      <h2>Створити подію</h2>
      <Label>Опис події</Label>
      <TextArea
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <Label>Дати (розділяти комами)</Label>
      <Input
        type="text"
        value={dates}
        onChange={e => setDates(e.target.value)}
      />

      <Label>Період голосування (в днях)</Label>
      <Input
        type="number"
        value={votingPeriod}
        onChange={e => setVotingPeriod(e.target.value)}
      />

      <Button onClick={handleSubmit}>Створити подію</Button>
    </Container>
  );
};

export default EventCreation;
