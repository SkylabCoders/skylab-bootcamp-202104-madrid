/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tour of Heroes', () => {
  render(<App />);
  const header = screen.getByText(/Tour of Heroes/i);
  expect(header).toBeInTheDocument();
});
