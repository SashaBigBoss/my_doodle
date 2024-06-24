// HeaderStyles.js

import styled, { keyframes } from 'styled-components';

// Анімація для тексту у хедері
const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Стилі для контейнера хедера
export const HeaderContainer = styled.header`
  background-color: #ff4c4c; /* Червоний колір */
  color: #ffffff; /* Білий текст */
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif; /* Шрифт */
  font-size: 24px;
  text-align: center;
  animation: ${slideIn} 0.5s ease-out; /* Анімація для тексту */
`;

// Компонент для назви сайту
export const SiteTitle = styled.h1`
  font-family: 'Graffiti', cursive; /* Шрифт типу графіті */
  font-size: 2rem;
  margin: 0;
`;
