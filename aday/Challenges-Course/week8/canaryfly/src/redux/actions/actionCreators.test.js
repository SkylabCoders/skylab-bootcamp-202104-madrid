import axios from 'axios';
import { login, logout } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

test('login should call dispatch', async () => {
  const dispatch = jest.fn();
  axios.post.mockResolvedValueOnce(
    {
      data: {
        name: 'Gilbe',
        age: 35,
      },
    },
  );

  await login()(dispatch);

  expect(dispatch).toHaveBeenCalled();
});

test('login should throw error', async () => {
  const dispatch = jest.fn();
  axios.post.mockRejectedValueOnce('error');

  try {
    await login()(dispatch);
  } catch (error) {
    expect(error).toBe('error');
  }
});

test('logout should return an object with type LOGOUT', () => {
  expect(logout().type).toBe(actionTypes.LOGOUT);
});
