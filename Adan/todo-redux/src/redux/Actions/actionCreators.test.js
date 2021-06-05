import axios from 'axios';
import {
  getTasks
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');
describe('Given a getTasks fn', () => {
  describe('When its invoked', () => {
    test('Then should call getTasks with dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce({
        tasks: {
          type: actionTypes.GET_TASKS,
          name: 'Mochila'
        }
      });
      await getTasks()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
