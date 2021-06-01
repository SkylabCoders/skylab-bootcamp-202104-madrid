/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1>Author quiz</h1>
        <p>Click the button to start</p>
      </div>
      <div>
        <Link
          to="/quiz"
          data-testid="home-start-button"
          className="btn btn-primary"
        >
          Start quiz
        </Link>
      </div>
    </>
  );
}

export default Home;
