import React, { useState } from 'react';
import Header from '../header';
import Book from '../Book';
import books from '../../constants/books';

export default function Quiz() {
  const [imgSrc, setImgSrc] = useState(books[books.length - 1].authorImg);
  const [authorName, setAuthorName] = useState(books[books.length - 1].author);
  const [correctAnswer, setCorrectAnswer] = useState(books[books.length - 1].title);
  function validateAnswer(title) {
    if (title === correctAnswer) {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  }
  return (
    <>
      <Header />
      <section>
        <img src={imgSrc} alt={authorName} />
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
    </>
  );
}
