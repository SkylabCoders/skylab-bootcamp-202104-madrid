/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../../redux/actions/actionCreators';

function Header() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function checkAuth() {
    dispatch(login(name, password, isAuthenticated));
  }
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        {
                user?.isAuthenticated
                  ? (
                    <>
                      <h1>
                        {' '}
                        Welcome
                        {' '}
                        {user.email}
                      </h1>
                      <Link to="/dashboard"> GO TO FILL THE GAPS</Link>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-testid="logout-button"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>

                    </>
                  )
                  : (
                    <>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                          email:
                          <input type="text" name="name" data-testid="email-input" onChange={(e) => setName(e.target.value)} value={name} />
                        </label>
                        <label htmlFor="password">
                          Password:
                          <input type="text" name="password" data-testid="password-input" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </label>

                        <button
                          type="button"
                          className="btn btn-primary"
                          data-testid="login-button"
                          onClick={checkAuth}
                        >
                          Login
                        </button>
                      </form>

                    </>
                  )
            }
      </div>
    </>
  );
}
export default Header;
