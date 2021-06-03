import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroDashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/list">List</Link>
    </>
  );
}
