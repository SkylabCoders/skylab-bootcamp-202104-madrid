/* eslint-disable no-param-reassign */
import booksData from '../constants/booksData';

export function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getFourRandomValues() {
  const randomValues = new Set();

  while (randomValues.size < 4) {
    randomValues.add(getRandomArbitrary(0, booksData.length));
  }

  return [...randomValues];
}
/*
export function nextQuiz() {
  const randomArray = getFourRandomValues();

  return randomArray.reduce(
    (nextQuizData, currentRandomIndex, index) => {
      const correctBook = booksData[currentRandomIndex];
      if (index === 0) {
        nextQuizData = {
          books: [correctBook.title],
          ...correctBook,
        };
      } else {
        nextQuizData = {
          ...nextQuizData,
          books: [...nextQuizData.books, booksData[currentRandomIndex].title],
        };
      }
      return nextQuizData;
    },
    {
      books: [],
      authorImg: '',
      author: '',
      title: '',
    },
  );
}
 */

export function nextQuiz() {
  const randomArray = getFourRandomValues();

  const books = randomArray.map((index) => booksData[index].title);
  const correctAnswer = booksData[randomArray[getRandomArbitrary(0, 3)]];

  return {
    books,
    ...correctAnswer,
  };
}

