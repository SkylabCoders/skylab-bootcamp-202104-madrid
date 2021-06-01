import React from 'react';
import {
  Link
} from 'react-router-dom';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
      <Link to="/form">Start</Link>
    </div>

  );
}

export default Home;
