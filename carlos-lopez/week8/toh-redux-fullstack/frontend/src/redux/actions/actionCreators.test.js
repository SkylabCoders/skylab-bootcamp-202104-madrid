import axios from 'axios';
import actionTypes from './actionTypes';
import {
  getHeroes, addHero, deleteHero, modifyHero, getOneHero,
} from './actionCreators';

jest.mock('axios');
describe('getHeroes function tests', () => {
  test('getHeroes should called dispatch', async () => {
    const dispatch = jest.fn();
    axios.mockResolvedValueOnce({
      type: actionTypes.GET_HEROES,
      heroes: {
        name: 'mochilo',
      },
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

describe('addHero function tests', () => {
  test('should dispatch POST_HEROES', async () => {
    axios.post.mockResolvedValue({ type: actionTypes.POST_HERO, data: ['Madri'] });
    const dispatch = jest.fn();
    // act
    await addHero()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.POST_HERO,
      hero: ['Madri'],
    });
  });
});

describe('deleteHero function tests', () => {
  test('should dispatch DELETE_HEROES', async () => {
    axios.delete.mockResolvedValue({ type: actionTypes.DELETE_HERO, data: ['Madri'] });
    const dispatch = jest.fn();
    // act
    await deleteHero()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_HERO,
    });
  });
});
describe('modifyHero function tests', () => {
  test('should dispatch PUT_HEROES', async () => {
    const dispatch = jest.fn();
    const hero = { name: 'mochilo' };
    axios.put.mockResolvedValue({ type: actionTypes.PUT_HERO, data: 'Madri' });
    // act
    await modifyHero(hero)(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given getOneHero fn', () => {
  describe('When its invoked', () => {
    test('Then should call getOneHero with dispatch', async () => {
      const dispatch = jest.fn();
      const hero = { name: 'Bayardo' };
      axios.mockResolvedValue({
        type: actionTypes.GET_ONE_HERO,
        data: 'Mochila',
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
