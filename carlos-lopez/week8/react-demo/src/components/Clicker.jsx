/* eslint-disable react/prop-types */
import React from 'react';

function Clicker({ handleClick }) {
  return (
    <button
      type="button"
      onClick={() => handleClick('A')}
    >
      A

    </button>
  );
}
export default Clicker;
