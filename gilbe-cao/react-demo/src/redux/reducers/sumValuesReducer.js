import actionTypes from '../actions/actionTypes';

export default function sumValuesReducer(sumValues = { a: 0, b: 0 }, action) {
  if (action.type === actionTypes.NEW_VALUES) {
    return action.values;
  }
  return sumValues;
}
