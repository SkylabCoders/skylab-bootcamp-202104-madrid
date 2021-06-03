/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { screen, render } from '../../utils/test-utils';
import { getHeroes } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  describe('Given a getHeroes function', () => {
    describe('When it is invoked', () => {
      test('Then it should be called', () => {
        // arrange
        getHeroes.mockReturnValueOnce({ type: '' });
        // act
        render(<Dashboard />, {
          initialState: {
            heroes: [],
          },
        });
        // assert
        expect(getHeroes).toHaveBeenCalled();
      });
      test('Then Bayardo should be rendered', () => {
        // arrange
        getHeroes.mockReturnValueOnce({ type: '' });
        // act
        render(<Dashboard />, {
          initialState: {
            heroes: [{}, { name: 'Bayardo' }],
          },
        });
        // assert
        expect(screen.getByText(/Bayardo/i)).toBeInTheDocument();
      });
    });
  });
});
