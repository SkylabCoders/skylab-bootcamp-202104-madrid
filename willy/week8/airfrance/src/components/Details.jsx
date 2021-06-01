import React from 'react';
import { useLocation } from 'react-router';
import Header from './Header';

function Detail() {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <Header />
      <p>
        Thanks for registering
        {' '}
        {formData.name}
        {' '}
        {formData.surname}
        !
      </p>
    </div>

  );
}

export default Detail;
