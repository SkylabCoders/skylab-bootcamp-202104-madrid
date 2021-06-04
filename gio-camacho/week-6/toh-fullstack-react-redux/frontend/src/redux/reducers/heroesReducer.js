import actionTypes from '../actions/actionTypes';

function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL_HEROES:
      return action.heroes;

    case actionTypes.POST_HERO:
      return [
        ...heroes,
        action.hero,
      ];

    case actionTypes.UPDATE_HERO_BY_ID:
      return heroes.map(
        (hero) => (hero.id === action.hero.id
          ? { ...hero, ...action.hero }
          : hero
        ),
      );

    case actionTypes.DELETE_HERO_BY_ID:
      return heroes.filter(
        (hero) => hero.id !== action.data,
      );

    default:
      return heroes;
  }
}

export default heroesReducer;
