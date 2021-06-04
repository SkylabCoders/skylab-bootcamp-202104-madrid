import axios from 'axios';
import {
  getList,
  getListElement,
  createTask,
  deleteTask,
  updateTask,
} from './actionCreators';

jest.mock('axios');

describe('given a getList function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          list: [{}],
        },
      );
      await getList()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('given a getListElement function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          listElement: {},
        },
      );
      await getListElement()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('given a createTask function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce(
        {
          listElement: {},
        },
      );
      await createTask()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('given a deleteTask function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.delete.mockResolvedValueOnce(
        {
          listElement: {},
        },
      );
      await deleteTask()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('given a updateTask function', () => {
  describe('when calling it', () => {
    test('It should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.put.mockResolvedValueOnce(
        {
          listElement: {},
        },
      );
      await updateTask()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
