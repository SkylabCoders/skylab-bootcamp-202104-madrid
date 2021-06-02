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
      <h1>COMPLETE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </label>
        <label htmlFor="surname">
          Surname:
          <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} value={surname} />
        </label>
        <label htmlFor="flight">
          Flight:
          <input type="text" name="flight" onChange={(e) => setFlight(e.target.value)} value={flight} />
        </label>
      </form>
      <Link to={{
        pathname: '/contract',
        state: {
          name,
          surname,
          flight,
        },
      }}
      >
        SUBMIT

      </Link>
    </>
  );
}
export default Form;
