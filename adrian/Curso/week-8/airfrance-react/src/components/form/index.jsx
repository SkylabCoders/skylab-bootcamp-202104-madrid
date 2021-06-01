import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  function sendForm(event) {
    event.preventDefult();
  }
  return (
    <section>
      <h1>Form</h1>
      <form onSubmit={sendForm}>
        <label htmlFor="name">
          Frirst Name:
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit" value="Submit">
          <Link
            to={{
              pathname: '/details',
              state: {
                phone,
                name
              }
            }}
          >
            Enviar Datos
          </Link>
        </button>
      </form>
    </section>
  );
}

export default Form;
