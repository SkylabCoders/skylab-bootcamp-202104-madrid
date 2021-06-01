/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header/Header';
import Book from './Book';

import bookData from '../../constants/bookData';

function Quiz() {
  return (

    <div>

      <Header />
      <section>
        <ul>

          { bookData.splice(0, 4).map((book) => (

            <Book
              title={book.title}
              key={book.title}
            />
          ))}

        </ul>
      </section>
      {/* TODO <div>
        { isCorrect && (
        <button
          type="button"
          onClick={() => { nextQuiz(); setIsCorrect(null); }}
        >
          Next quiz
        </button>
        )}
      </div> */}
    </div>

  );
}

export default Quiz;
