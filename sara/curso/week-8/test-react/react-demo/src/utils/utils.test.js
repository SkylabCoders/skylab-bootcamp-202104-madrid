const { nextQuiz } = require('./utils');

describe('in utils', () => {
  describe('given a nextQuiz function', () => {
    describe('When it is invoked', () => {
      test('should return {books, title, name, authorImg}', () => {
        const quizData = nextQuiz();
        expect(Object.keys(quizData)).toEqual(['books', 'author', 'title', 'authorImg']);
      });
    });
  });
});
