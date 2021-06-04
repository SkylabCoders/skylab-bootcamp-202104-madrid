import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/actions/actionCreators';

export default function toDoList() {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.list);
  useEffect(() => {
    if (!list.length) dispatch(getList());
  }, []);

  const taskList = list.map((task) => (
    <li>
      {task.description}
    </li>
  ));
  return (
    <>
      <h1>TO DO</h1>
      <ul>{taskList}</ul>
    </>
  );
}
