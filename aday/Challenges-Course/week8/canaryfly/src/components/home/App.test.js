import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
  const title = screen.getByText(/Canaryfly/i);
  expect(title).toBeInTheDocument();
});
