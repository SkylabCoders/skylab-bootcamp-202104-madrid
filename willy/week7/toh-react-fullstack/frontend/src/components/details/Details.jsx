import React, { useState, useEffect } from 'react';

function Details({ match }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/heroes/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((newData) => {
        setData(newData);
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

  // eslint-disable-next-line no-underscore-dangle
  const heroId = data.filter((hero) => hero._id === match.params.id)[0];

  return (
    <div>
      <h3>Your details</h3>
      <p>
        name:
        {' '}
        {heroId.name}
      </p>
    </div>
  );
}

export default Details;
