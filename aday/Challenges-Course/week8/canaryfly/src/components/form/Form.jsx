/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="surname">Surname</label>
        <br />
        <input
          name="surname"
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </form>
      <Link to={{
        pathname: '/submit',
        state: {
          name,
          surname,
        },
      }}
      >
        <input
          className="submitButton"
          type="submit"
          value="submit"
        />
      </Link>
    </>
  );
}

export default Form;
