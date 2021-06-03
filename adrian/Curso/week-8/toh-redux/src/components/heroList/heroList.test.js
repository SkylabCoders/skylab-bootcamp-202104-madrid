/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import List from './index';
import { render, screen } from '../../utils/utils';

describe('Given dashboard component', () => {
  test('Should render LIST', () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );
    expect(screen.getByText(/LIST/i)).toBeInTheDocument();
  });
});
