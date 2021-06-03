/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render tour of heroes', () => {
  render(<App />);
  const header = screen.getByText(/Tour of heroes/i);
  expect(header).toBeInTheDocument();
});
