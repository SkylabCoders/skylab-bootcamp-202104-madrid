/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Header from '../Header';
import Books from '../Books';
import BooksData from '../../constants/BooksData';
import './quiz.css';

function Quiz() {
  let booksArray;
  const [num, setNumValue] = useState(0);
  const [correct, setCorrect] = useState(BooksData[0].title);
  const [isCorrect, setIsCorrect] = useState('');
  const [newArr, setNewArr] = useState(
    [{
      author: 'Paulo Coelho',
      title: 'The Alchemist',
      authorImg: 'https://www.biografiasyvidas.com/biografia/c/fotos/coelho.jpg',
    },
    {
      author: 'Dan Brown',
      title: 'The DaVinci Code',
      authorImg: 'https://i.guim.co.uk/img/media/adb81d8dde35e9acdbb37a6d39c2725ba01c5379/0_337_6720_4032/master/6720.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93a776f8c1eee608c54084d20341c672',
    },
    {
      author: 'Anne Frank',
      title: 'The Diary of Anne Frank ',
      authorImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anne_Frank_lacht_naar_de_schoolfotograaf.jpg/220px-Anne_Frank_lacht_naar_de_schoolfotograaf.jpg',
    },
    {
      author: 'Umberto Eco',
      title: 'The Name of the Rose',
      authorImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Italiaanse_schrijver_Umberto_Eco%2C_portret.jpg/440px-Italiaanse_schrijver_Umberto_Eco%2C_portret.jpg',
    },
    ],
  );

  function createArray() {
    if (num < BooksData.length) {
      setNumValue(num + 1);
      booksArray = [...BooksData];
      const thisTimeBook = BooksData[num + 1];
      booksArray.splice(num + 1, 1);
      booksArray = booksArray.sort(() => Math.random() - 0.5).slice(0, 3);
      booksArray.push(thisTimeBook);
      booksArray.sort(() => Math.random() - 0.5);
      setNewArr(booksArray);
      setIsCorrect(false);
      setCorrect(BooksData[num + 1].title);
    }
  }

  function validateAnswer(title) {
    if (title === correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <>
      <Header />
      <section>
        <img src={BooksData[num].authorImg} alt="" />
        <ul>
          { newArr.map((book, index) => (
            <Books
              title={book.title}
              validateAnswer={validateAnswer}
              key={index}
            />
          ))}
        </ul>
        {
          isCorrect && (
            <button type="button" onClick={() => createArray()}>Next</button>
          )
        }
      </section>
    </>
  );
}

export default Quiz;
