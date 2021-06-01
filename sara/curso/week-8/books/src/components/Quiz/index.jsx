/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Header from '../Header';
import Books from '../Books';
import BooksData from '../../constants/BooksData';
import './quiz.css';

function Quiz() {
  let booksArray = [...BooksData].sort(() => Math.random() - 0.5).slice(0, 3);
  booksArray.push(BooksData[0]);
  const [num, setNumValue] = useState(0);
  const [correct, setCorrect] = useState(BooksData[0].title);
  const [isCorrect, setIsCorrect] = useState('');
  const [newArr, setNewArr] = useState(booksArray);

  function createArray() {
    if (num < BooksData.length) {
      const newNum = num + 1;
      booksArray = [...BooksData];
      const thisTimeBook = BooksData[newNum];
      booksArray.splice(newNum, 1);
      booksArray = booksArray.sort(() => Math.random() - 0.5).slice(0, 3);
      booksArray.push(thisTimeBook);
      booksArray.sort(() => Math.random() - 0.5);
      setNumValue(newNum);
      setNewArr(booksArray);
      setIsCorrect(false);
      setCorrect(BooksData[newNum].title);
    }
  }

  function validateAnswer(title) {
    if (title === correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <>
      <Header />
      <section>
        <img src={BooksData[num].authorImg} alt="" />
        <ul>
          { newArr.map((book, index) => (
            <Books
              title={book.title}
              validateAnswer={validateAnswer}
              key={index}
            />
          ))}
        </ul>
        {
          isCorrect && (
            <button type="button" onClick={() => createArray()}>Next</button>
          )
        }
      </section>
    </>
  );
}

export default Quiz;
