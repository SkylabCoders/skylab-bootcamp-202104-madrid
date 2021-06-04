import axios from 'axios';
import { login, logout, bookFlight } from './actionCreatoris';
import actionTypes from './actionTypes';

jest.mock('axios');

test('login should return an obj with a property user', () => {
  const result = login('email', 'password');
  expect(result.user.email).toBe('email');
});

test('logout should return an obj with a property Type', () => {
  const result = logout('email', 'password');
  expect(result.type).toBe(actionTypes.LOGOUT);
});

test('bookFlight should call dispstch', async () => {
  const dispatch = jest.fn();
  axios.post.mockResolvedValueOnce(
    {
      flightData: 'flightData',
    },
  );
  await bookFlight()(dispatch);
  expect(dispatch).toHaveBeenCalled();
});
