import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/Actions/actionCreators';

export default function Todo() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <>
      <form action="">
        <input type="text" />

      </form>
      <h2>To-do List</h2>
      <ul className="pending">
        {tasks.map((task) => <li>{task.description}</li>)}
      </ul>
    </>
  );
}
