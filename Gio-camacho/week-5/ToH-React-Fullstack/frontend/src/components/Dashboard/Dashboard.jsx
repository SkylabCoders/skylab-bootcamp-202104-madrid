import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4002/api/heroes/')
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
    <div>
      <h2>Top Heroes</h2>
      {
        data.slice(0, 4).map((hero) => (
          <p
            // eslint-disable-next-line no-underscore-dangle
            key={hero._id}
          >
            {hero.name}
          </p>
        ))
      }
    </div>
  );
}

export default Dashboard;
