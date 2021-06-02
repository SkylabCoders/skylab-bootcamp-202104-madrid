import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/actionCreatoris';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
            <button type="button" onClick={() => dispatch(logout())}>
              Log Out
            </button>
          </>
        ) : (
          <button type="button" onClick={() => dispatch(login('email@email.com', '1234'))}>
            Log In
          </button>
        )
      }
    </div>
  );
}

export default Header;
