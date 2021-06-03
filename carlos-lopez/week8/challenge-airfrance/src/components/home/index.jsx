import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h1>Estoy aqui soy el Dashboard</h1>
      <Link to="/form"> GO TO FILL THE GAPS</Link>
    </>
  );
}
export default Dashboard;
