/* eslint-disable no-debugger */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/actionCreators';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  return (
    <div>
      {
      user?.email
        ? (
          <>
            <h1>welcome</h1>
            <button
              type="button"
              onClick={() => dispatch(logout())}
            >
              LogOut

            </button>
          </>
        )
        : (
          <>
            <h1>
              {user.email}
            </h1>
            <button
              type="button"
              onClick={() => {
                debugger;
                dispatch(login('sgfjshdb', 'iusdgfi'));
              }}
            >
              LogIn
            </button>
          </>
        )
      }

    </div>
  );
}

export default Header;
