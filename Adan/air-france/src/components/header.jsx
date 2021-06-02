/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login } from '../redux/actions/actionCreators';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  return (
    <div className="asd">
      {
            user?.email
              ? (
                <>
                  <h1>
                    Welcome
                    {user.email}
                  </h1>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                </>
              )
              : (
                <>
                  <h1>
                    Welcome

                    {user.email}

                  </h1>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => dispatch(login('pepe', 123))}
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
