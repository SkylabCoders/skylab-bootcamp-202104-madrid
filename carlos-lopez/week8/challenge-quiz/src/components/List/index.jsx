/* eslint-disable no-unused-vars */
import React from 'react';
import Authors from '../../constants/Authors';
import './list.css';

function List() {
  return (
    <div className="List">
      <img src={Authors[0].authorImg} alt="authors" />
      <span>{Authors[0].author}</span>
    </div>
  );
}

export default List;
