import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Bienvenido a Canaryfly</h1>
      <Link to="/form">

        <button type="button">FORM</button>

      </Link>
    </>
  );
}

export default App;
