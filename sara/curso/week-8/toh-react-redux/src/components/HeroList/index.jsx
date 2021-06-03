/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions/actionCreators';

export default function HeroList() {
  const dispatch = useDispatch();
  const heroes = useSelector((store) => store.heroes);
  useEffect(() => {
    if (!heroes.length) dispatch(getAll());
  }, []);
  const completeList = heroes.map((hero) => (
    <li className="list_li" key={hero._id}>
      <Link to={`/detail/${hero._id}`}>
        {hero.name}
      </Link>
    </li>
  ));
  return (
    <>
      <Link to="/">Dashboard</Link>
      <h1>List</h1>
      <ul>
        {completeList}
      </ul>
    </>
  );
}
