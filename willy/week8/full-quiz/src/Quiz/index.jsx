/* eslint-disable no-param-reassign */
/* eslint-disable no-debugger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Header from './Header';
import Book from './Book';
import Home from './Home';
import './Quiz.css';
import {
  nextQuiz
} from '../utils/utils';

function Quiz() {
  const [books, setBooks] = useState();
  const [imgSrc, setImgSrc] = useState();
  const [authorName, setAuthorName] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  function setNextQuizData() {
    const valuesForNextQuiz = nextQuiz();
    debugger;
    setBooks(valuesForNextQuiz.books);
    setImgSrc(valuesForNextQuiz.authorImg);
    setAuthorName(valuesForNextQuiz.author);
    setCorrectAnswer(valuesForNextQuiz.title);
  }

  const [isCorrect, setIsCorrect] = useState(null);

  /**
   * null white
   * false red
   * true green
   */
  function getCorrectBackground(isCorrectAnswer) {
    let backgroundClass = '';

    switch (isCorrectAnswer) {
      case true:
        backgroundClass = 'bg-success';
        break;

      case false:
        backgroundClass = 'bg-danger';
        break;

      case null:
      default:
        backgroundClass = '';
        break;
    }

    return backgroundClass;
  }

  function validateAnswer(title) {
    if (correctAnswer.toLowerCase() === title.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <div className="container">
      {
        books ? (
          <>
            <Header />
            <section
              className={`d-flex flex-sm-column flex-md-row p-5 mb-3 ${getCorrectBackground(isCorrect)}`}
            >
              <img className="mb-5" src={imgSrc} alt={authorName} />
              <ul>
                { books && books.map((book, index) => (
                  <Book
                    validateAnswer={validateAnswer}
                    title={book}
                    key={index}
                  />
                ))}
              </ul>
            </section>
          </>
        ) : <Home nextQuiz={setNextQuizData} />
      }

      <div className="d-flex flex-row-reverse quiz-actions">
        { isCorrect && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => { setNextQuizData(); setIsCorrect(null); }}
        >
          Next quiz
        </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
