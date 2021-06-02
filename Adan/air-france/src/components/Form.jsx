import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [flight, setFlight] = useState('');

  function manageSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={manageSubmit}>

        <label htmlFor="vuelo">
          Flight:

          <input type="text" name="vuelo" placeholder="Escribe un vuelo" onChange={(event) => setFlight(event.target.value)} value={flight} />
        </label>

        <label htmlFor="name">
          Name:

          <input type="text" name="name" placeholder="Escribe un vuelo" onChange={(event) => setName(event.target.value)} value={name} />
        </label>

      </form>
      <Link to={{
        pathname: '/Details',
        state: {
          name,
          flight
        }
      }}
      >
        <input type="submit" />
      </Link>
    </>
  );
}

export default Form;
