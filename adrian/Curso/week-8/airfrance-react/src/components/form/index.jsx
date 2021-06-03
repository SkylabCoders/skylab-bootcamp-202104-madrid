import { React, useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  function sendForm(event) {
    event.preventDefult();
  }
  return (
    <section>
      <h1>Form</h1>
      <form onSubmit={sendForm}>
        <label htmlFor="name">
          name:
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="surname">
          surname:
          <input
            id="surname"
            type="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          )
        </label>
        <button type="submit" value="Submit">

          Enviar Datos

        </button>
      </form>
    </section>
  );
}
export default Form;
