/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './index';
import { render, screen } from '../../utils/utils';

describe('Given dashboard component', () => {
  test('Should render DASHBOARD', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(screen.getByText(/DASHBOARD/i)).toBeInTheDocument();
  });
});
