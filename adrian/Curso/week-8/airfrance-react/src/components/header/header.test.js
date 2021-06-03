/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../utils/test-utils';
import Header from './index';
import { login, logout } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypeS';

jest.mock('../../redux/actions/actionCreators');

describe('Given a header component, when is invoked', () => {
  test('Should show a login button', () => {
    render(<Header />);
    const loginButton = screen.getByTestId('loginButton');
    expect(loginButton).toBeInTheDocument();
  });
});

describe('When login button is clicked', () => {
  test('Should show the user email', () => {
    render(<Header />);
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'email',
        password: 'password'
      }
    });
    const emailInput = screen.getByTestId('emailInput');
    const passwordInput = screen.getByTestId('passwordInput');
    fireEvent.change(emailInput, { target: { value: 'email' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    const loginButton = screen.getByTestId('loginButton');
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId('logoutButton');
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });
});
