import actiontypes from '../actions/actionsTypes';

export default function heroReducer(heroes = [], action) {
  switch (action.type) {
    case actiontypes.GET_ALL_HEROES:
      return action.hero;
    case actiontypes.POST_HERO:
      return [...heroes, action.hero];
    case actiontypes.UPDATE_HERO_BY_ID:
      return heroes.map(
        (hero) => (hero.id === action.hero
          ? { ...hero, ...action.hero }
          : hero
        )
      );
    case actiontypes.DELETE_HERO_BY_ID:
      return heroes.filter((hero) => hero.id !== action.hero);
    default:
      return heroes;
  }
}
