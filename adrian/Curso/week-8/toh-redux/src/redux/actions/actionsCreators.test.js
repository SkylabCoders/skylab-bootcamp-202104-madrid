import axios from 'axios';
import { getAll, getHeroById } from './actionCreator';

jest.mock('axios');

describe('Given a getAll function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          heroes: 'hola'
        }
      );

      await getAll()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a getHeroById function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          data: 'hola'
        }
      );

      await getHeroById()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
