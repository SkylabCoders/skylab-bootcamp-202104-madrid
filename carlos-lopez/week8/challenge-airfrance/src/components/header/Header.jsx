import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/actionCreators';

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
                        {' '}
                        Welcome
                        {' '}
                        {user.email}
                      </h1>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>

                    </>
                  )
                  : (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => dispatch(login('carlos@gmail.com', '1234'))}
                      >
                        Login
                      </button>

                    </>
                  )
            }
    </div>
  );
}
export default Header;
