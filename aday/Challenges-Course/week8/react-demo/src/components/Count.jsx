/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function Count() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Count;
