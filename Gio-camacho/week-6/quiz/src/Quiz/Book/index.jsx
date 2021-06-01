/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Book.scss';

function Book({ title, validateAnswer, styles }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className={styles}
      key={title}
      onClick={() => validateAnswer(title)}
    >
      {title}
    </li>
  );
}

export default Book;
