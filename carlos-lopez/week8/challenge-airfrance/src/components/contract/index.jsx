import React from 'react';
import { useLocation } from 'react-router';

function Contract() {
  const location = useLocation();
  const {
    name,
    surname,
    flight,
  } = location.state;
  return (
    <>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h3>{flight}</h3>
    </>
  );
}
export default Contract;
