/* eslint-disable no-console */
import React, { useEffect } from 'react';

import './App.css';

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
  });
  return (

    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
