/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <form onSubmit={(e) => { handleSubmit(e); }}>
      <label htmlFor="name">Name</label>
      <br />
      <input
        name="name"
        type="text"
        id="name"
      />
      <br />
      <label htmlFor="surname">Surname</label>
      <br />
      <input
        name="surname"
        type="text"
        id="surname"
      />
      <br />
      <input
        className="submitButton"
        type="submit"
        value="submit"
      />
    </form>

  );
}

export default Form;
