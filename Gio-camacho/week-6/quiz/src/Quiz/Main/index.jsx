import React, { useState } from 'react';
import Book from '../Book';
import books from '../../constants/books';
import './Main.scss';

function Main() {
  const [correctAnswer] = useState(books[books.length - 1].title);
  const [isCorrect, setIsCorrect] = useState('');

  function validateAnswer(title) {
    if (correctAnswer === title) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  function getBackgroundCorrect(answer) {
    let backgroundColor = '';

    switch (answer) {
      case true:
        backgroundColor = 'bg-success';
        break;

      case false:
        backgroundColor = 'bg-error';
        break;

      case null:
      default:
        backgroundColor = '';
        break;
    }

    return backgroundColor;
  }

  return (
    <section className="quiz-section">
      <div className="quiz-section__image">
        <img src={books[0].authorImg} alt={books.author} />
      </div>
      <ul className="quiz-list">
        {
              books.sort(() => Math.random() - 0.5).slice(0, 4).map((book) => (
                <Book
                  key={book.title}
                  styles={`${getBackgroundCorrect(isCorrect)} quiz-list__item`}
                  title={book.title}
                  validateAnswer={validateAnswer}
                />
              ))
        }
      </ul>
    </section>
  );
}

export default Main;
