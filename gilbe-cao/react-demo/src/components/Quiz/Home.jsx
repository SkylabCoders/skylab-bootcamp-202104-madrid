/* eslint-disable react/prop-types */
import React from 'react';

function Home({ nextQuiz }) {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1>Author quiz</h1>
        <p>Click the button to start</p>
      </div>
      <div>
        <button
          type="button"
          onClick={nextQuiz}
          className="btn btn-primary"
          data-testid="home-start-button"
        >
          Start quiz
        </button>
      </div>
    </>
  );
}

export default Home;
