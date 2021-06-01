/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Hello({ name, children }) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleChildren() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <h1>
        { `Slylab mola
        ${name}`}
      </h1>
      <button
        type="button"
        onClick={() => toggleChildren()}
      >
        show children

      </button>
      {isVisible && children}
    </div>
  );
}

export default Hello;
