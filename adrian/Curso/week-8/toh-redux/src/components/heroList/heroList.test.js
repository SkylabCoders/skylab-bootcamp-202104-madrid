/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import List from './index';
import { render, screen } from '../../utils/utils';
import { getAll } from '../../redux/actions/actionCreator';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreator');
describe('Given dashboard component', () => {
  test('Should render LIST', () => {
    getAll.mockReturnValueOnce({ type: actionTypes.GET_ALL });
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
      {
        initialState: {
          heroList: [{}, { name: 'adrian', _id: '2' }]
        }
      }

    );
    expect(screen.getByText(/LIST/i)).toBeInTheDocument();
  });
  test('Should call getAll', () => {
    getAll.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
      {
        initialState: {
          heroList: []
        }
      }

    );
    expect(getAll).toHaveBeenCalled();
  });
});
