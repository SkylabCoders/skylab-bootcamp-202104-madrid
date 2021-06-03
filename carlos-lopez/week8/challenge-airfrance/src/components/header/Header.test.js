/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
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
  test('should login to be in the document again', () => {
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
    let loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId('logout-button');
    fireEvent.click(logoutButton);
    loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });
  test('should change value in input', () => {
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'email@mail.com',
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
    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'email@mail.com' } });
    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(passwordInput, { target: { value: 'email@mail.com' } });
    let loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    const logoutButton = screen.getByTestId('logout-button');
    fireEvent.click(logoutButton);
    loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });
});
