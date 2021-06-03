/* eslint-disable no-debugger */
import { React, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/actionCreators';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function sendState(event) {
    event.preventDefault();
    return dispatch(login(email, password));
  }

  return (
    <div>
      {
      user?.email
        ? (
          <>
            <h1>
              welcome
              {' '}
              {user.email}
            </h1>
            <button
              type="button"
              onClick={() => dispatch(logout())}
              data-testid="logoutButton"
            >
              LogOut

            </button>
          </>
        )
        : (
          <>
            <form onSubmit={sendState}>
              <label htmlFor="email">
                email:
                <input
                  data-testid="emailInput"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                password:
                <input
                  data-testid="passwordInput"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit" value="submit" data-testid="loginButton">
                Login
              </button>
            </form>
          </>
        )
      }
    </div>
  );
}

export default Header;
