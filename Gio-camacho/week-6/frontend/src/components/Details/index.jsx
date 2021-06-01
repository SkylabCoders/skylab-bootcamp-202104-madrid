/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import UserContext from '../../UserContext';

function Details() {
  const msg = useContext(UserContext);
  console.log(msg);
  return (
    <div>
      <h1>Hola Details</h1>
    </div>
  );
}

export default Details;
