/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroById } from '../../redux/actions/actionCreator';

function heroDetail() {
  const { heroId } = useParams();
  const dispatch = useDispatch();
  const hero = useSelector((store) => store.heroSelected);
  useEffect(() => {
    dispatch(getHeroById(heroId));
  }, []);

  return (
    <div>
      <h1>DETAIL</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/list">List</Link>
      <div>
        <h2>
          {hero.name}
        </h2>
        <div>
          <span>id: </span>
          {hero._id}
          )
        </div>
      </div>
    </div>
  );
}

export default heroDetail;
