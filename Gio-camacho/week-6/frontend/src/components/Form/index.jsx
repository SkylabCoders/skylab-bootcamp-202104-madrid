import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [flight, setFlight] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
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
      <label htmlFor="flight">
        Flight:
        <input
          id="flight"
          type="text"
          value={flight}
          onChange={(e) => setFlight(e.target.value)}
        />
      </label>
      <Link
        type="submit"
        to={
          {
            pathname: '/details',
            state: {
              name,
              surname,
              flight,
            },
          }
        }
      >
        Submit
      </Link>
    </form>

  );
}

export default Form;
