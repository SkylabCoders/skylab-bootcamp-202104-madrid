/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Book({ title, validateAnswer }) {
  return (
    <li
      key={title}
      onClick={() => validateAnswer(title)}
    >
      {title}
    </li>
  );
}
