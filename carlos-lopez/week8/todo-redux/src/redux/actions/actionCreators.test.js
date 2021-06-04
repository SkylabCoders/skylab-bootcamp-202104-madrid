import axios from 'axios';
import actionTypes from './actionTypes';
import { getTasks } from './actionCreators';

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
