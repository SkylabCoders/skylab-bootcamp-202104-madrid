/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Detail from './index';
import { render, screen } from '../../utils/utils';

describe('Given dashboard component', () => {
  test('Should render DASHBOARD', () => {
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>
    );
    expect(screen.getByText(/DETAIL/i)).toBeInTheDocument();
  });
});
