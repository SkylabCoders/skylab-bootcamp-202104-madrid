import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions/actionCreator';

function heroList() {
  const dispatch = useDispatch();
  const heroes = useSelector((store) => store.heroList);
  useEffect(() => {
    if (!heroes.length) dispatch(getAll());
  }, []);
  return (
    <section>
      <h1>LIST</h1>
      <Link to="/">Dashboard</Link>
    </section>
  );
}

export default heroList;
