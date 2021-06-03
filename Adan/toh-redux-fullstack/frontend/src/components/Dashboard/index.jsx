/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHeroes } from '../../redux/actions/actionCreators';

function Dashboard() {
  const dispatch = useDispatch();
  const heroes = useSelector((store) => store.heroes);
  useEffect(() => {
    dispatch(getHeroes());
  }, []);
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(1, 5).map((hero) => <Link key={hero._id} to={`/detail/${hero._id}`}>{hero.name}</Link>)}
      </div>
    </>
  );
}
export default Dashboard;
