/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router';

function Detail() {
  const location = useLocation();
  const { name, surname, flight } = location.state;
  return (
    <>
      <h2>
        Thanks for the booking
        {' '}
        {name}
        {' '}
        {surname}
        !
      </h2>
      <h5>
        Your destination is
        {' '}
        {flight}
      </h5>

    </>
  );
}

export default Detail;
