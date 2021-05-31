// eslint-disable-next-line no-unused-vars
import React from 'react';
import Authors from '../../constants/Authors';

function RandomAnswers() {
  let shuffledAuthors = [...Authors];
  let currentIndex;
  shuffledAuthors = shuffledAuthors.sort(() => Math.random() - 0.5);
  const arrayAnswers = shuffledAuthors.slice(0, 4);
  function randomIndex() {
    currentIndex = Math.floor(Math.random() * arrayAnswers.length);
    return currentIndex;
  }
  randomIndex();
  return (
    <div>
      <h3>{arrayAnswers[currentIndex].author}</h3>
      <img src={arrayAnswers[currentIndex].authorImg} alt="authors" />
      <ul>
        {arrayAnswers.map((author) => <li>{author.title}</li>)}
      </ul>
    </div>
  );
}

export default RandomAnswers;
