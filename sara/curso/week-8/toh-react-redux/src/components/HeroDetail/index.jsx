import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroDetail() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/list">List</Link>
      </nav>
      <h1>Detail</h1>
    </>
  );
}
