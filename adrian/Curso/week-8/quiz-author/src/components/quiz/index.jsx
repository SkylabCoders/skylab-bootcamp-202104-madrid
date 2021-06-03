import React, { useState } from 'react';
import Header from './Header';
import Book from './Book';
import booksList from '../../constant/books';

function Quiz() {
  const [correctAnswer, setCorrectAnswer] = useState('');
  function validateAnswer(title) {
    if (title === correctAnswer) {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  }
  return (
    <section>
      <Header />
      { booksList.map((book) => (
        <Book
          validateAnswer={validateAnswer}
          title={book}
        />
      ))}
    </section>
  );
}

export default Quiz;
