/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('http://localhost:4000/api/heroes/')
      .then((res) => {
        setData(res.data);
      })
      .catch((newError) => {
        setError(newError);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (

    <>
      <h2>
        Top Heroes
      </h2>
      {
        data.slice(0, 4).map((hero) => (
          <Link
              // eslint-disable-next-line no-underscore-dangle
            to={`details/${hero._id}`}
              // eslint-disable-next-line no-underscore-dangle
            key={hero._id}
          >
            {hero.name}
          </Link>
        ))
  }
    </>
  );
}

export default dashboard;
