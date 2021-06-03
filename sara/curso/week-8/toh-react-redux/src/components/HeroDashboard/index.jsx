import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroDashboard() {
  return (
    <>
      <Link to="/list">List</Link>
      <h1>Dashboard</h1>
    </>
  );
}
