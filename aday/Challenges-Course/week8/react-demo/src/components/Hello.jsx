import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Hello({ name, children }) {
  // let isVisible = false;
  const [isVisible, setIsVisible] = useState(false);

  function toggleChildren() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <h1>
        {`Los magios y ${name}`}
      </h1>
      <p>mandan!!</p>
      <button
        type="button"
        onClick={() => toggleChildren()}
      >
        show children

      </button>
      { isVisible && children }
    </div>
  );
}

export default Hello;
