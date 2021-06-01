import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(`Hola ${name}`);
    // <Details
    //   name={name}
    // />;
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
      <input
        id="name"
        type="submit"
        value="Submit"
      />
    </form>

  );
}

export default Form;
