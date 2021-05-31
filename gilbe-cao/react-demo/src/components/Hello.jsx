/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Hello({ children, name }) {
  // let isVisible = false;
  const [isVisible, setIsVisible] = useState(false);

  function toggleChildren() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <h1>
        {`Welcome to Skylab, ${name}`}
      </h1>
      <button
        type="button"
        onClick={() => toggleChildren()}
      >
        toogle children
      </button>
      {isVisible && children}
    </div>
  );
}

export default Hello;
