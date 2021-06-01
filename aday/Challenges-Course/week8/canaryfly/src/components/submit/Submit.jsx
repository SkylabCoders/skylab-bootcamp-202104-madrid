import React from 'react';
import { useLocation } from 'react-router';

function Submit() {
  const location = useLocation();
  const {
    name,
    surname,
  } = location.state;
  return (
    <>
      <h1>
        Name:
        {' '}
        {name}
      </h1>
      <h2>
        Surname:
        {' '}
        {surname}
      </h2>
    </>
  );
}

export default Submit;
