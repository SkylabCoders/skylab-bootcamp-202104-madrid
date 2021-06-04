/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/actionCreators';
import HeaderComponent from '../header/Header';

function Form() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderComponent />
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
        <br />
        <button
          className="btn btn-light m-3 p-3"
          type="button"
          onClick={() => dispatch(login(name, surname))}
        >
          Submit
        </button>
        <Link to="/">

          <button type="button" className="btn btn-light m-3 p-3">Home</button>

        </Link>
      </form>
      {/* <Link to={{
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
      </Link> */}
    </>
  );
}

export default Form;
