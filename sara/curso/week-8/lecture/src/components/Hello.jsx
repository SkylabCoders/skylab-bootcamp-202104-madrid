/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Hello({ name, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h1>
        {`Welcome to Skylab, ${name}`}
      </h1>
      <button type="button" onClick={() => { setIsVisible(!isVisible); }}>
        show
      </button>
      {isVisible && children}
    </>
  );
}

export default Hello;
