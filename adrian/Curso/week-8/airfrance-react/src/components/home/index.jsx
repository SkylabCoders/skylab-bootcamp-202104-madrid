import React from 'react';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <section>
      <h1>Home</h1>
      <Link to="/form">
        Go to Form
      </Link>
    </section>
  );
}

export default Form;
