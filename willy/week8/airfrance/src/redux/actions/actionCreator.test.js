/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../utils/test-utils';
import Header from './Header';
import { login, logout } from '../redux/actions/actionCreators';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('../redux/actions/actionCreators');

describe('Header component', () => {
  test('should toggle login and logout buttons', () => {
    // Arrange
    login.mockReturnValueOnce({
      type: actionTypes.LOGIN,
      user: {
        email: 'pepe'
      }
    });

    logout.mockReturnValueOnce({
      type: actionTypes.LOGOUT
    });

    // Act: Render component
    render(<Header />);

    // Assert
    let loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();

    // Act: Login with email 'pepe'
    fireEvent.click(loginButton);

    // Assert
    const logoutButton = screen.getByTestId('logout-button');
    expect(logoutButton).toBeInTheDocument();
    expect(screen.getByText(/pepe/i)).toBeInTheDocument();

    // Act: Logout
    fireEvent.click(logoutButton);

    // Assert
    loginButton = screen.getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });

  test('should render logout from an initial state', () => {
    render(
      <Header />,
      {
        initialState: {
          user: { email: 'pepe' }
        }
      }
    );

    // Assert
    const logoutButton = screen.getByTestId('logout-button');
    expect(logoutButton).toBeInTheDocument();
    expect(screen.getByText(/pepe/i)).toBeInTheDocument();
  });
});
