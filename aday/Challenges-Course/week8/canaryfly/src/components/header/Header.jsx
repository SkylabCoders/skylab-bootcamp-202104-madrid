import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/actionCreators';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  return (
    <div>
      {
                user?.name
                  ? (
                    <>
                      <h1 className="d-grid gap-2">
                        Welcome
                        {' '}
                        {user.name}
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
                      onClick={() => dispatch(login(user.name, user.surname))}
                    >
                      Login
                    </button>
                  )
            }
    </div>
  );
}

export default Header;
