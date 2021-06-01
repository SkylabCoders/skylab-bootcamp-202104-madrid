import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [send, setSend] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSend(true);
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
        <input type="submit" value="Submit" />
      </form>
      {send
      && (
        <h1>
          Hola
          {' '}
          {name}
        </h1>
      )}
    </>
  );
}

export default Form;
