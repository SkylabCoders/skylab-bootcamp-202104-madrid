import { nextQuiz } from './utils';

describe('nextQuiz function', () => {
  let quizData;
  beforeEach(() => {
    quizData = nextQuiz();
  });

  test('should return {books, title, author, authorImg}', () => {
    expect(Object.keys(quizData)).toEqual(['books', 'author', 'title', 'authorImg']);
  });

  test('should return books.length=4', () => {
    expect(quizData.books.length).toBe(4);
  });
});
