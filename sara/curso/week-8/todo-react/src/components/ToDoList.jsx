import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/actions/actionCreators';

export default function toDoList() {
  const dispatch = useDispatch();
  const [newTaskValue, setNewTaskValue] = useState('');
  const list = useSelector((store) => store.list);
  useEffect(() => {
    if (!list.length) dispatch(getList());
  }, []);

  const taskList = list.map((task) => (
    <li>
      <div>
        {task.description}
      </div>
      <button type="button">Update</button>
      <button type="button">Delete</button>
    </li>
  ));
  function handleTask(event) {
    setNewTaskValue(event.target.value);
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
      >
        ADD
      </button>

      <h1>TO DO</h1>
      <ul>{taskList}</ul>
    </>
  );
}
