import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="quiz-header">
      <h1 className="quiz-header__title">Author Quiz</h1>
      <p className="quiz-header__description">Select the book written by the author shown</p>
    </header>
  );
}

export default Header;
