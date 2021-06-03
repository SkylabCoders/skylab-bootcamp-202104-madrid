import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Home() {
  return (
    <>
      <button type="button">
        <Link to="/form"> Start Form </Link>
      </button>
    </>
  );
}

export default Home;
