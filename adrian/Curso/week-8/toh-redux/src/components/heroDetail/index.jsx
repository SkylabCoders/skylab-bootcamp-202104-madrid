import React from 'react';
import { Link } from 'react-router-dom';

function heroDetail() {
  return (
    <section>
      <h1>DETAIL</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/list">List</Link>
    </section>
  );
}

export default heroDetail;
