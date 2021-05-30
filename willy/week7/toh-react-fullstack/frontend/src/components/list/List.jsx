import React, { useState, useEffect } from 'react';

function List() {
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
  return (
    <>

      {data.map((hero) => (
        <p
            // eslint-disable-next-line no-underscore-dangle
          key={hero._id}
        >
          {hero.name}
        </p>
      ))}
    </>
  );
}

export default List;
