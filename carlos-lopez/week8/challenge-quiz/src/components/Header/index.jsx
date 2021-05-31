/* eslint-disable no-unused-vars */
import React from 'react';
import Authors from '../../constants/Authors';

function Header() {
  return (
    <h3>{Authors[0].author}</h3>
  );
}
export default Header;
