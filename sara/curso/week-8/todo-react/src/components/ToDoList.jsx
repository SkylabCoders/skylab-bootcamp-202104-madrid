/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getList, createTask, deleteTask, updateTask,
} from '../redux/actions/actionCreators';

export default function toDoList() {
  const dispatch = useDispatch();
  const [newTaskValue, setNewTaskValue] = useState('');
  const list = useSelector((store) => store.list);
  const listElement = useSelector((store) => store.listElement);
  useEffect(() => {
    debugger;
    dispatch(getList());
  }, [list.length, listElement]);

  function handleTask(event) {
    setNewTaskValue(event.target.value);
  }

  function addTask() {
    dispatch(createTask({ description: newTaskValue }));
  }

  function deleteListElement(taskId) {
    dispatch(deleteTask(taskId));
  }

  function updateListElement(taskId) {
    dispatch(updateTask(taskId, { description: newTaskValue }));
  }

  return (
    <>
      <input
        id="newTaskValue"
        type="text"
        value={newTaskValue}
        onChange={handleTask}
      />
      <button
        type="button"
        value="Submit"
        data-testid="login-button"
        onClick={addTask}
      >
        ADD
      </button>

      <h1>TO DO</h1>
      <ul>
        {
      list && list.map((task) => (
        <li>
          <div>
            {task.description}
          </div>
          <button
            type="button"
            onClick={() => { updateListElement(task._id); }}
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => { deleteListElement(task._id); }}
          >
            Delete

          </button>
        </li>
      ))
    }
      </ul>
    </>
  );
}
