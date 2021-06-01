/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Authors from '../../constants/Authors';
import './randomAnswers.css';

let currentIndex;
let shuffledAuthors = [...Authors];

function randomIndex() {
  currentIndex = Math.floor(Math.random() * 4);
  return currentIndex;
}
function RandomAnswers() {
  const [arrayAnswers, setArrayAnswers] = useState(shuffledAuthors.slice(0, 4));
  function prueba() {
    shuffledAuthors = [...Authors];
    shuffledAuthors = shuffledAuthors.sort(() => Math.random() - 0.5).slice(0, 4);
    console.log(shuffledAuthors);
    randomIndex();
    setArrayAnswers(shuffledAuthors);
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
            >
              {author.title}
            </li>
          ))}
        </ul>
      </section>
      <button type="button" onClick={prueba}>NEXT</button>
    </div>
  );
}

export default RandomAnswers;
