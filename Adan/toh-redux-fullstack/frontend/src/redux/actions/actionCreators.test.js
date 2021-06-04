import axios from 'axios';
import {
  addHero, getHeroes, deleteHero, modifyHero, getOneHero
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');
describe('Given a getHeroes fn', () => {
  describe('When its invoked', () => {
    test('Then should call getHeroes with dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce({
        heroes: {
          type: actionTypes.GET_HEROES,
          name: 'Mochila'
        }
      });
      await getHeroes()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('getHeroes should throw error', async () => {
      const dispatch = jest.fn();
      axios.mockRejectedValueOnce('error');

      try {
        await getHeroes()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});
describe('Given addHero fn', () => {
  describe('When its invoked', () => {
    test('Then should call addHero with dispatch', async () => {
      const dispatch = jest.fn();
      const hero = { name: 'Bayardo' };
      axios.post.mockResolvedValue({
        type: actionTypes.POST_HERO,
        data: 'Mochila'

      });
      await addHero(hero)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('addHero should throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockRejectedValueOnce('error');

      try {
        await addHero()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});
describe('Given deleteHero fn', () => {
  describe('When its invoked', () => {
    test('Then should call deleteHero with dispatch', async () => {
      const dispatch = jest.fn();
      const hero = { name: 'Bayardo' };
      axios.delete.mockResolvedValue({
        type: actionTypes.DELETE_HERO,
        data: '1213434'

      });
      await deleteHero(hero)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('deleteHero should throw error', async () => {
      const dispatch = jest.fn();
      axios.delete.mockRejectedValueOnce('error');

      try {
        await deleteHero()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});
describe('Given modifyHero fn', () => {
  describe('When its invoked', () => {
    test('Then should call modifyHero with dispatch', async () => {
      const dispatch = jest.fn();
      const hero = { name: 'Bayardo' };
      axios.put.mockResolvedValue({
        type: actionTypes.PUT_HERO,
        data: 'Mochila'

      });
      await modifyHero(hero)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe('Given getOneHero fn', () => {
  describe('When its invoked', () => {
    test('Then should call getOneHero with dispatch', async () => {
      const dispatch = jest.fn();
      const hero = { name: 'Bayardo' };
      axios.mockResolvedValue({
        type: actionTypes.GET_ONE_HERO,
        data: 'Mochila'

      });
      await getOneHero(hero)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('getOneHero should throw error', async () => {
      const dispatch = jest.fn();
      axios.mockRejectedValueOnce('error');

      try {
        await getOneHero()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});
