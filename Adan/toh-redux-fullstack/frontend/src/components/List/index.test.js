/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import List from './index';
import { screen, render } from '../../test-utils';
import { getHeroes } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  describe('Given a getHeroes fn', () => {
    describe('When its invoked', () => {
      test('Then it should be called', () => {
        // arrange
        getHeroes.mockReturnValueOnce({ type: '' });
        // act
        render(<List />, {
          initialState: {
            heroes: []
          }
        });
        // asert
        expect(getHeroes).toHaveBeenCalled();
      });
      test('Then Adan should be render', () => {
        // arrange
        getHeroes.mockReturnValueOnce({ type: '' });
        // act
        render(<List />, {
          initialState: {
            heroes: [{}, { name: 'Adan' }]
          }
        });
        // asert
        expect(screen.getByText(/Adan/i)).toBeInTheDocument();
      });
    });
  });
});
