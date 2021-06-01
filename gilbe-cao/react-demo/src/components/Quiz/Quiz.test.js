/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Quiz from '.';
import {
  nextQuiz,
} from '../../utils/utils';

jest.mock('../../utils/utils');

describe('Quiz component', () => {
  beforeEach(() => {
    nextQuiz.mockReturnValue({
      books: ['title1', 'title2', 'title3', 'title4'],
      authorImg: 'authorImg',
      author: 'pepe',
      title: 'title1',
    });
  });

  test('renders quiz section', () => {
    render(<Quiz />);

    const quizSection = screen.getByTestId('quiz-section');
    expect(quizSection).toBeInTheDocument();
  });

  test('should click on correct answer', () => {
    render(<Quiz />);

    const firtBookTitle = screen.getByTestId('book-title-item-title1');
    fireEvent.click(firtBookTitle);

    const quizNextButton = screen.getByTestId('quiz-next-button');

    expect(quizNextButton).toBeInTheDocument();
  });

  test('should not render next button', () => {
    render(<Quiz />);

    const wrongBookTitle = screen.getByTestId('book-title-item-title2');
    fireEvent.click(wrongBookTitle);

    const nextButton = screen.queryByTestId('quiz-next-button');
    expect(nextButton).toBeNull();
  });

  test('should click on next button', () => {
    render(<Quiz />);

    const firtBookTitle = screen.getByTestId('book-title-item-title1');
    fireEvent.click(firtBookTitle);

    const quizNextButton = screen.getByTestId('quiz-next-button');
    fireEvent.click(quizNextButton);

    expect(screen.queryByTestId('quiz-next-button')).toBeNull();
  });
});
