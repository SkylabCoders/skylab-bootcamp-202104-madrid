import heroListReducer from './heroListReducer';
import actionTypes from '../actions/actionTypes';
import getAll from '../actions/actionCreator';

describe('Given a heroListReducer', () => {
  describe('When is invoked', () => {
    test('Should return action.heroes'), () => {
      heroeListReducer();
    };
  });
});
