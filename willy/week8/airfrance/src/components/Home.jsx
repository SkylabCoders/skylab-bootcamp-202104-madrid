import React from 'react';
import {
  Link
} from 'react-router-dom';
import Header from './Header';
import './home.css';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Link to="/form">Start</Link>
      </div>
    </>
  );
}

export default Home;
