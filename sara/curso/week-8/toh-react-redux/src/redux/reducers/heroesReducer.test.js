import actionTypes from '../actions/actionTypes';
import heroesReducer from './heroesReducer';
import { getAll } from '../actions/actionCreators';

jest.mock('..//actions/actionCreators');

describe('Given heroesReducer', () => {
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return action.heroes', () => {
      getAll.mockReturnValueOnce({ type: actionTypes.GET_ALL, heroes: 'heroes' });
      const heroes = [];
      const action = {
        type: '',
      };
      const result = heroesReducer(heroes, action);
      expect(result).toEqual(heroes);
    });
  });
});
