import axios from 'axios';
import { getAll } from './actionCreator';

jest.mock('axios');
describe('Given a getAll function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce(
        {
          data: 'hola'
        }
      );

      await getAll()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
