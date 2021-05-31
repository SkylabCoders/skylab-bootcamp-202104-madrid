import React from 'react';
import Book from '../Book';
import books from '../../constants/books';

function Main() {
  return (
    <section>
      <div>
        <img src={books[0].authorImg} alt={books.author} />
        <ul>
          {
              books.sort(() => Math.random() - 0.5).slice(0, 4).map((book, index) => (
                <Book
              // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  title={book.title}
                />
              ))
        }
        </ul>
      </div>
    </section>
  );
}

export default Main;
