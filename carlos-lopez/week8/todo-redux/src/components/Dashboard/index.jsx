/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/actions/actionCreators';

function Dashboard() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  useEffect(() => {
    dispatch(getTasks());
  });
  return (
    <>
      <div className="task-list">
        <h1>Soy el Dashboard</h1>
        <ul>
          {
                todos.map((task) => <li>{task.name}</li>)
            }
        </ul>
      </div>
    </>
  );
}
export default Dashboard;
