import actionTypes from '../actions/actionTypes';
import heroesReducer from './heroesReducer';

describe('Given heroesReducer', () => {
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return action.heroes', () => {
      const heroes = [];
      const action = {
        type: actionTypes.GET_ALL,
        heroes,
      };
      const result = heroesReducer(heroes, action);
      expect(result).toEqual(action.heroes);
    });
  });
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return heroes', () => {
      const heroes = [];
      const action = {
        type: 'default case',
        heroes,
      };
      const result = heroesReducer(heroes, action);
      expect(result).toEqual(heroes);
    });
  });
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return action.heroes', () => {
      const action = {
        type: actionTypes.GET_ALL,
      };
      const result = heroesReducer(undefined, action);
      expect(result).toEqual(action.heroes);
    });
  });
});
