/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTasks, addTask, modifyTask, deleteTask
} from '../../redux/Actions/actionCreators';

export default function Todo() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);
  // const task = useSelector((store) => store.task);
  const [newValue, setNewValue] = useState('');
  useEffect(() => {
    dispatch(getTasks());
  });

  function refreshNewInput(event) {
    setNewValue(event.target.value);
  }

  function createTask() {
    dispatch(addTask({ description: newValue }));
  }

  function updateTask(taskId) {
    dispatch(modifyTask(taskId, { description: newValue }));
  }
  function deleteChore(taskId) {
    dispatch(deleteTask(taskId));
  }

  return (
    <>

      <input
        type="text"
        value={newValue}
        onChange={refreshNewInput}
      />
      <button
        type="button"
        onClick={() => { createTask(); }}
      >
        ADD CHORE
      </button>
      <h2>To-do List</h2>
      <ul className="pending">
        {tasks.map((chore) => (
          <li>
            <small>
              {chore.description}
            </small>
            <button
              type="button"
              onClick={() => { updateTask(chore._id); }}
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => { deleteChore(chore._id); }}
            >
              delete

            </button>

          </li>
        ))}
      </ul>
    </>
  );
}
