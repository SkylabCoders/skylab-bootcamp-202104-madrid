import React from 'react';

// eslint-disable-next-line react/prop-types
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
