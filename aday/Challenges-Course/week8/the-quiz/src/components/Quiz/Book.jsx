/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Book({ title, validateAnswer }) {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return <li onClick={() => validateAnswer(title)}>{title}</li>;
}

export default Book;
