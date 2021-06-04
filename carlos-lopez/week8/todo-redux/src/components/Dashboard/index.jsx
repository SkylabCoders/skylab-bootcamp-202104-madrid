/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, addTask } from '../../redux/actions/actionCreators';

function Dashboard() {
  const [taskInputComponent, setTaskInputComponent] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.tasks);
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  function collectDataInputAdd() {
    dispatch(addTask({ name: taskInputComponent }));
  }
  return (
    <>
      <div className="task-list">
        <label htmlFor="task">
          Task:
          <input type="text" name="task" data-testid="task-input" onChange={(e) => setTaskInputComponent(e.target.value)} value={taskInputComponent} />
        </label>
        <button
          type="button"
          className="btn btn-primary"
          data-testid="login-button"
          onClick={collectDataInputAdd}
        >
          ADD TASK
        </button>
        <ul>
          {
                todos.map((task) => (
                  <li>
                    {task.name}
                  </li>
                ))
            }
        </ul>
      </div>
    </>
  );
}
export default Dashboard;
