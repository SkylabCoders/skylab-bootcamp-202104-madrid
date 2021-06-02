/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Form() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} className="container__form">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="surname">
            Surname:
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </label>
          <button type="submit" value="Submit">
            {' '}
            <Link to={
            {
              pathname: '/details',
              state: {
                name,
                surname
              }
            }
        }
            >
              {' '}
              Register
              {' '}

            </Link>
            {' '}
          </button>

        </form>
      </div>
    </>
  );
}

export default Form;
