import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
// import Form from './Form';

function Home() {
  return (
    <>
      <Header />
      <Link to="/form">
        Go to Form
      </Link>
    </>
  );
}

export default Home;
