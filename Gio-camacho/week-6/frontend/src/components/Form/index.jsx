import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <Link
        type="submit"
        to="/details"
      >
        Submit
      </Link>
    </form>

  );
}

export default Form;
