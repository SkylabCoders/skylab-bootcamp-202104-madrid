/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import List from './index';
import { screen, render } from '../../utils/test-utils';
import { getHeroes } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('List component', () => {
  describe('Given a getHeroes function', () => {
    describe('When is invoked', () => {
      test('then it should be called', () => {
        // arrange
        getHeroes.mockReturnValueOnce({ type: '' });
        // act
        render(<List />, {
          initialState: {
            heroes: [],
          },
        });
        // assert
        expect(getHeroes).toHaveBeenCalled();
      });
      test('then Perita should be rendered', () => {
        // arrange
        getHeroes.mockReturnValueOnce({ type: '' });
        // act
        render(<List />, {
          initialState: {
            heroes: [{}, { name: 'Perita' }],
          },
        });
        // assert
        expect(screen.getByText(/Perita/i)).toBeInTheDocument();
      });
    });
  });
});
