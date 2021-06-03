import axios from 'axios';
import { getAll } from './actionCreators';

jest.mock('axios');
describe('Given a getAll function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const getAllConst = getAll();
    });
  });
});
