/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test-utils';
import HeroList from './index';

describe('List component ', () => {
  test('should have Dashboard in it', () => {
    render(
      <MemoryRouter>
        <HeroList />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
