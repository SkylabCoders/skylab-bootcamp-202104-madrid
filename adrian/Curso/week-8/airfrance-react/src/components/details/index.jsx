/* eslint-disable react/prop-types */
import { React } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Details() {
  const location = useLocation();
  const { email } = location.state;
  return (
    <section>
      <h1>
        Hello
        {' '}
        {email}
      </h1>
      <Link to="/">
        Back to home
      </Link>

    </section>
  );
}

export default Details;
