import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/actionCreatoris';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [useremail, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  function handleUser(event) {
    event.preventDefault();
    return dispatch(login(useremail, password));
  }

  return (
    <div>
      {
      user?.email
        ? (
          <>
            <h1>
              Welcome
              {' '}
              {user.email}
            </h1>
            <button
              type="button"
              data-testid="logout-button"
              onClick={() => dispatch(logout())}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <form onSubmit={handleUser}>
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  type="email"
                  value={useremail}
                  data-testid="email-input"
                  onChange={(event) => setUserEmail(event.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  id="password"
                  type="password"
                  value={user.password}
                  data-testid="password-input"
                  onChange={(event) => setUserPassword(event.target.value)}
                />
              </label>
              <button
                type="submit"
                value="Submit"
                data-testid="login-button"
              >
                Log in

              </button>
            </form>
          </>
        )
      }
    </div>
  );
}

export default Header;
