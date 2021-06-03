/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test-utils';
import HeroDashboard from './index';

describe('HeroDashboard component', () => {
  test('should render Dashboard in it', () => {
    render(
      <MemoryRouter>
        <HeroDashboard />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
