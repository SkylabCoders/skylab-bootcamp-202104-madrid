import React from 'react';
import { useLocation } from 'react-router';

function Details() {
  const location = useLocation();
  const { name, flight } = location.state;
  return (
    <>
      <h1>{name}</h1>
      <h2>{flight}</h2>
    </>
  );
}
export default Details;
