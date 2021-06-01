/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Hello({ name, children }) {
  const [isVisible, setIsVisible] = useState(false);
  function toogleChildren() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <h1>
        Welcome to Skylab,
        {' '}
        {name}
      </h1>
      <button
        type="button"
        onClick={() => toogleChildren()}
      >
        Show children

      </button>
      {isVisible && children}
    </>
  );
}
export default Hello;
