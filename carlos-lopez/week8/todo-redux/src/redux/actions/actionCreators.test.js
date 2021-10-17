import axios from 'axios';
import actionTypes from './actionTypes';
import { getTasks, addTask } from './actionCreators';

jest.mock('axios');

describe('Given getTasks function', () => {
  describe('When is invoked', () => {
    test('The it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce({
        type: actionTypes.GET_TASKS,
        tasks: {
          name: 'Testing',
        },
      });
      await getTasks()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe('Given addTask function', () => {
  describe('When is invoked', () => {
    test('The it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce({
        type: actionTypes.ADD_TASK,
        tasks: {
          name: 'Testing',
        },
      });
      await addTask()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
