/* eslint-disable no-const-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Authors from '../../constants/Authors';
import './randomAnswers.css';

function RandomAnswers() {
  let shuffledAuthors = [...Authors];
  let currentIndex;
  shuffledAuthors = shuffledAuthors.sort(() => Math.random() - 0.5);
  const [arrayAnswers, setArrayAnswers] = useState(shuffledAuthors);
  function randomIndex() {
    currentIndex = Math.floor(Math.random() * arrayAnswers.length);
    return currentIndex;
  }
  randomIndex();
  return (
    <div className="container">
      <h3>{arrayAnswers[currentIndex].author}</h3>
      <section className="container--data">
        <img src={arrayAnswers[currentIndex].authorImg} alt="authors" />
        <ul>
          {arrayAnswers.map((author, index) => (
            <li
              key={`a+${index}`}
              onClick={setArrayAnswers(() => {
                arrayAnswers = shuffledAuthors.slice(0, 4);
              })}
            >
              {author.title}
            </li>
          ))}
        </ul>
      </section>
      <button type="button">NEXT</button>
    </div>
  );
}

export default RandomAnswers;
