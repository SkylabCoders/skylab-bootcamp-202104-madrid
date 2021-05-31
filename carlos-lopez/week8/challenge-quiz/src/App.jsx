/* eslint-disable no-unused-vars */
import React from 'react';
import Authors from './constants/Authors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
          Authors.map((author) => <li>{author.author}</li>)
        }
        </ul>
      </header>
    </div>
  );
}

export default App;
