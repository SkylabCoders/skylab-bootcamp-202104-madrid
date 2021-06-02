export function getNewValues(a, b) {
  return {
    type: 'NEW_VALUES',
    values: { a, b },
  };
}

export function getNewValuesAsync(a, b) {
  return async (dispatch) => {
    // const values = await axios('myApiUrl')
    dispatch({
      type: 'NEW_VALUES',
      values: { a, b },
    });
  };
}
