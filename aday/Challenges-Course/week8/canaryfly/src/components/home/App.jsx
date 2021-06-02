import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

function App() {
  return (
    <>
      <h1>Bienvenido a Canaryfly</h1>
      <Header> </Header>
      <Link to="/form">

        <button type="button">FORM</button>

      </Link>
    </>
  );
}

export default App;
