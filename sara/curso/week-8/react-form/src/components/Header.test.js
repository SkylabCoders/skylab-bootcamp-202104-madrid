/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../utils/test-utils';
import Header from './Header';
import { login, logout } from '../redux/actions/actionCreatoris';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('../redux/actions/actionCreatoris');

describe('Header component without user', () => {
  test('should render log in button', () => {
    render(<Header />);
    const loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });
});

describe('Header component with user', () => {
  test('should render log in button', () => {
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'email@mail.com',
      },
    });
    render(<Header />);
    const loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId('logout-button');
    expect(logoutButton).toBeInTheDocument();
    expect(screen.getByText(/email@mail.com/i)).toBeInTheDocument();
  });
});

describe('Header component with user', () => {
  test('should render log in button', () => {
    render(<Header />);
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'email@mail.com',
      },
    });

    logout.mockReturnValueOnce({
      type: actionTypes.LOGOUT,
    });

    let loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId('logout-button');
    fireEvent.click(logoutButton);
    loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });
});

describe('Header component changing values', () => {
  test('should render log in button', () => {
    render(<Header />);
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'email@mail.com',
      },
    });

    const useremail = 'eee@ee.com';
    useremail.setState('email@mail.com');

    logout.mockReturnValueOnce({
      type: actionTypes.LOGOUT,
    });

    const loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    expect(useremail).toBe('email@mail.com');
  });
});
