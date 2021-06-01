/* eslint-disable react/prop-types */
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Details() {
  const location = useLocation();
  const { name } = location.state;
  const { phone } = location.state;
  return (
    <section>
      <h1>
        Hello
        {' '}
        {name}
      </h1>
      <p>
        Phone:
        {' '}
        {phone}
      </p>
      <Link to="/">
        Back to home
      </Link>

    </section>
  );
}

export default Details;
