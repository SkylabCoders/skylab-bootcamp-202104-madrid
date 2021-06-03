/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../utils/test-utils';
import HeroList from './index';
import { getAll } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('List component ', () => {
  test('should have Dashboard in it', () => {
    getAll.mockReturnValueOnce({ type: actionTypes.GET_ALL });
    render(
      <MemoryRouter>
        <HeroList />
      </MemoryRouter>,
      {
        initialState: {
          heroes: [{}, { name: 'hero', _id: '11' }],
        },
      },
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
  test('should have Dashboard in it', () => {
    getAll.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <HeroList />
      </MemoryRouter>,
      {
        initialState: {
          heroes: [],
        },
      },
    );
    expect(getAll).toHaveBeenCalled();
  });
});
