/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

function Book({ title }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={title}
    >
      {title}
    </li>
  );
}

export default Book;
