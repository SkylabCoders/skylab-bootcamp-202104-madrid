import axios from 'axios';
import { getAll, getOne } from './actionCreators';

jest.mock('axios');

describe('given a getAll function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          heroes: 'heroes',
        },
      );
      await getAll()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('given a getOne function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          hero: 'hero',
        },
      );
      await getOne()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
