import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOne } from '../../redux/actions/actionCreators';

export default function HeroDetail() {
  const { heroId } = useParams();
  console.log(heroId);
  const dispatch = useDispatch();
  const hero = useSelector((store) => store.hero);
  useEffect(() => {
    dispatch(getOne(heroId));
  }, []);
  return (
    <>
      <h1>{hero.name}</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/list">List</Link>
      </nav>
      <h1>Detail</h1>
    </>
  );
}
