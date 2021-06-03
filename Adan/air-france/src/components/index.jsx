import React from 'react';
import { Link } from 'react-router-dom';
// import Form from './Form';

function Home() {
  return (
    <>
      <Link to="/form">
        Go to Form
      </Link>
    </>
  );
}

export default Home;
