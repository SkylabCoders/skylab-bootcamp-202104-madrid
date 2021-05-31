/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Header from './Header';
import Book from './Book';
import './Quiz.css';
import booksData from '../../constants/booksData';

function Quiz() {
  /**
   * TODO Set this initial values random
   */
  const [books, setBooks] = useState([
    booksData[4].title,
    booksData[booksData.length - 1].title,
    booksData[1].title,
    booksData[2].title,
  ]);
  const [imgSrc, setImgSrc] = useState(booksData[booksData.length - 1].authorImg);
  const [authorName, setAuthorName] = useState(booksData[booksData.length - 1].author);
  const [correctAnswer, setCorrectAnswer] = useState(booksData[booksData.length - 1].title);

  /**
   * TODO Set the next quiz values random
   */
  function nextQuiz() {
    const {
      author,
      authorImg,
      title,
    } = booksData[0];

    setBooks([title, ...booksData.slice(1, 4).map((book) => book.title)].sort());
    setImgSrc(authorImg);
    setAuthorName(author);
    setCorrectAnswer(title);
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
      <Header />
      <section
        className={`d-flex flex-sm-column flex-md-row p-5 mb-3 ${getCorrectBackground(isCorrect)}`}
      >
        <img className="mb-5" src={imgSrc} alt={authorName} />
        <ul>
          { books.map((book, index) => (
            <Book
              validateAnswer={validateAnswer}
              title={book}
              key={index}
            />
          ))}
        </ul>
      </section>
      <div className="d-flex flex-row-reverse quiz-actions">
        { isCorrect && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => { nextQuiz(); setIsCorrect(null); }}
        >
          Next quiz
        </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
