import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewValues, getNewValuesAsync } from '../redux/actions/sumActionCreators';
import LoginHeader from './LoginHeader';

function Sum() {
  const dispatch = useDispatch();
  const { a, b, isLogged } = useSelector(({ sumValues, auth }) => ({
    a: sumValues.a,
    b: sumValues.b,
    isLogged: auth.isLogged,
  }));

  return (
    <>
      <header>
        <LoginHeader />
      </header>

      {
        isLogged && (
          <>
            <h1>{`${a} + ${b} = ${a + b}`}</h1>

            <p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => dispatch(getNewValues(1, 2))}
              >
                1 + 2
              </button>
            </p>

            <p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => dispatch(getNewValuesAsync(5, 9))}
              >
                5 + 9
              </button>
            </p>
          </>
        )
      }

    </>
  );
}

export default Sum;
