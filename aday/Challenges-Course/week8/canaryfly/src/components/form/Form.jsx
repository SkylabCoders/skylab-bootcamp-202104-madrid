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
        <label htmlFor="name" className="mb-2 m-2 p-2">Name:</label>
        <br />
        <input
          className="mb-2 m-2 p-2"
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="surname" className="mb-2 m-2 p-2">Surname:</label>
        <br />
        <input
          className="mb-2 m-2 p-2"
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
          className="btn btn-light m-3 p-3"
          type="submit"
          value="Submit"
        />
      </Link>
    </>
  );
}

export default Form;
