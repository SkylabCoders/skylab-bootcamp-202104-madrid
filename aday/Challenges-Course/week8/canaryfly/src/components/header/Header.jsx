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
                      <h1 className="d-grid gap-2">
                        Welcome
                        {' '}
                        {user.email}
                      </h1>
                      <button
                        className="btn btn-light m-3 p-3"
                        type="button"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>
                    </>
                  )
                  : (
                    <button
                      className="btn btn-light m-3 p-3"
                      type="button"
                      onClick={() => dispatch(login('Aday', '1234'))}
                    >
                      Login
                    </button>
                  )
            }
    </div>
  );
}

export default Header;
