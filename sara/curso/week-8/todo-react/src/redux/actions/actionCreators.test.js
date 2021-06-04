import axios from 'axios';
import { getList } from './actionCreators';

jest.mock('axios');

describe('given a getList function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          list: [{}],
        },
      );
      await getList()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
