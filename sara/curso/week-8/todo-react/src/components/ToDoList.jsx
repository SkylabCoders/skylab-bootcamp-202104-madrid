/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getList, createTask, deleteTask, updateTask,
} from '../redux/actions/actionCreators';
import './ToDoList.css';

export default function toDoList() {
  const dispatch = useDispatch();
  const [newTaskValue, setNewTaskValue] = useState('');
  const list = useSelector((store) => store.list);
  const listElement = useSelector((store) => store.listElement);
  useEffect(() => {
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
      <div className="main">

        <h1>TO DO</h1>
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

        <ul>
          {
      list && list.map((task) => (
        <li>
          <div className="list-name">
            {task.description}
          </div>
          <button
            type="button"
            data-testid="update-button"
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
      </div>
    </>
  );
}
