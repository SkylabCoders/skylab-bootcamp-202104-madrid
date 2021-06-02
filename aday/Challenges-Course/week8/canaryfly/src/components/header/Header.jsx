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
                      <h1>
                        Welcome
                        {' '}
                        {user.email}
                      </h1>
                      <button
                        type="button"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>
                    </>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => dispatch(login('Aday@canaryfly.com', '1234'))}
                    >
                      Login
                    </button>
                  )
            }
    </div>
  );
}

export default Header;
