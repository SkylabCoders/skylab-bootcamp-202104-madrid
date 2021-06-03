import axios from 'axios';
import { login, logout, bookFlight } from './actionCreators';
import actionTypes from './actionTypeS';

jest.mock('axios');

test('login should call login ', () => {
  const result = login('email', 'password');
  expect(result.user.email).toBe('email');
});

test('login should call logout ', () => {
  const result = logout();
  expect(result.type).toBe(actionTypes.LOGOUT);
});

test('login should call bookFlight ', async () => {
  const dispatch = jest.fn();
  axios.post.mockResolvedValueOnce({
    data: 'hola'
  });
  await bookFlight()(dispatch);
  expect(dispatch).toHaveBeenCalled();
});
