/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { login, logout } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import { render, screen } from '../../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('Header component', () => {
  test('should toggle login button', () => {
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'pepe',
        isAuthenticated: true,
      },
    });
    logout.mockReturnValueOnce({
      type: actionTypes.LOGOUT,
    });
    render(<Header />);
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });
  test('should toggle logout button', () => {
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'pepe',
        isAuthenticated: true,
      },
    });
    logout.mockReturnValueOnce({
      type: actionTypes.LOGOUT,
    });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId('logout-button');
    expect(logoutButton).toBeInTheDocument();
  });
});
