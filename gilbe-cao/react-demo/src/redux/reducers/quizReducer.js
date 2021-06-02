import actionTypes from '../actions/actionTypes';

function quizReducer(quiz = {}, action) {
  switch (action.type) {
    case actionTypes.NEXT_QUIZ:
      return action.quiz;

    case actionTypes.START_QUIZ:
      return action.quiz;

    case actionTypes.END_QUIZ:
      return {};

    default:
      return quiz;
  }
}

export default quizReducer;
