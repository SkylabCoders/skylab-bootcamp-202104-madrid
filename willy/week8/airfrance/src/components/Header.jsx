import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/actionCreator';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
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
                onClick={() => dispatch(logout())}
                className="btn btn-primary"
              >
                Logout
              </button>
            </>
          )
          : (
            <button
              type="button"
              onClick={() => dispatch(login('jorobate@flanders.com', '1234'))}
              className="btn btn-primary"
            >
              Login
            </button>
          )
      }

    </div>
  );
}

export default Header;
