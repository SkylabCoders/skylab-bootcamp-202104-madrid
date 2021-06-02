import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/authActionCreators';

function LoginHeader() {
  const dispatch = useDispatch();
  const { isLogged, user } = useSelector(({ auth }) => auth);

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      {
        isLogged
          ? (
            <>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(logout())}
                type="button"
              >
                Logout
              </button>
              <p>
                Welcome
                {' '}
                {user.name}
              </p>
            </>
          )
          : (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(login())}
              type="button"
            >
              Login
            </button>
          )
      }
    </div>
  );
}

export default LoginHeader;
