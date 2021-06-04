/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, addTask, updateTask } from '../../redux/actions/actionCreators';

function Dashboard() {
  const [taskInputComponent, setTaskInputComponent] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.tasks);
  const toDo = useSelector((store) => store.task);
  useEffect(() => {
    dispatch(getTasks());
  }, [toDo]);

  function collectDataInputAdd() {
    dispatch(addTask({ name: taskInputComponent }));
  }
  function collectDataInputUpdate(id) {
    dispatch(updateTask(id, { name: taskInputComponent }));
  }
  return (
    <>
      <div className="task-list">
        <label htmlFor="task">
          Task:
          <input type="text" name="task" data-testid="task-input" onChange={(e) => { setTaskInputComponent(e.target.value); }} value={taskInputComponent} />
        </label>
        <button
          type="button"
          className="btn btn-primary"
          data-testid="add-button"
          onClick={collectDataInputAdd}
        >
          ADD TASK
        </button>
        <ul>
          {
               todos.map((task) => (
                 <li key={task._id}>
                   {task.name}

                   <button
                     type="button"
                     className="btn btn-secondary"
                     data-testid="update-button"
                     id={task._id}
                     onClick={() => { collectDataInputUpdate(task._id); }}
                   >
                     UPDATE
                   </button>

                   <button
                     type="button"
                     className="btn btn-secondary"
                     data-testid="update-button"
                     id={task._id}
                     onClick={() => { collectDataInputUpdate(task._id); }}
                   >
                     DELETE
                   </button>
                 </li>
               ))
            }
        </ul>
      </div>
    </>
  );
}
export default Dashboard;
