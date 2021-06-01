/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Authors from '../../constants/Authors';
import './randomAnswers.css';
import { randomIndex } from '../../utils';

function RandomAnswers() {
  let shuffledAuthors = [...Authors];
  const [arrayAnswers, setArrayAnswers] = useState(shuffledAuthors.slice(0, 4));
  let currentIndex = randomIndex();
  function shuffledQuiz() {
    shuffledAuthors = [...Authors];
    shuffledAuthors = shuffledAuthors.sort(() => Math.random() - 0.5).slice(0, 4);
    console.log(shuffledAuthors);
    currentIndex = randomIndex();
    setArrayAnswers(shuffledAuthors);
  }
  return (
    <div className="container">
      <h3>{arrayAnswers[currentIndex].author}</h3>
      <section className="container--data">
        <img src={arrayAnswers[currentIndex].authorImg} alt="authors" />
        <ul>
          {arrayAnswers.map((author, index) => (
            <li
              key={`a+${index}`}
            >
              {author.title}
            </li>
          ))}
        </ul>
      </section>
      <button type="button" onClick={shuffledQuiz}>NEXT</button>
    </div>
  );
}

export default RandomAnswers;
