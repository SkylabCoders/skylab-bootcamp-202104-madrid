/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router';

function Details() {
  const location = useLocation();
  const {
    name,
    surname,
    flight,
  } = location.state;
  return (
    <div>
      <h1>Details</h1>
      <p>{`Bienvenido ${name} ${surname}`}</p>
      <p>{`Ha reservado un vuelo a ${flight}`}</p>
    </div>
  );
}

export default Details;
