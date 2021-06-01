/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders start button', () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const startButton = screen.getByTestId('home-start-button');
  expect(startButton).toBeInTheDocument();
});
