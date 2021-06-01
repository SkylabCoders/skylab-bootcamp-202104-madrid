import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [flight, setFlight] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Frirst Name:
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="surname">
          Surname:
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label htmlFor="fligh">
          Flight destination:
          <input
            id="flight"
            type="text"
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
          />
        </label>
        <button type="submit" value="Submit">
          {' '}
          <Link to={
            {
              pathname: '/detail',
              state: {
                name,
                surname,
                flight,
              },
            }
        }
          >
            {' '}
            Submit
            {' '}

          </Link>
          {' '}
        </button>
      </form>
    </>
  );
}

export default Form;
