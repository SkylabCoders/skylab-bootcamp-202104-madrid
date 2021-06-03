import axios from 'axios';
import actionTypes from './actionTypes';
import { getHeroes, addHero, deleteHero } from './actionCreators';

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
  test('should dispatch LOAD_HEROES', async () => {
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
  test('should dispatch LOAD_HEROES', async () => {
    axios.post.mockResolvedValue({ type: actionTypes.DELETE_HERO, data: ['Madri'] });
    const dispatch = jest.fn();
    // act
    await deleteHero()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_HERO,
    });
  });
});
