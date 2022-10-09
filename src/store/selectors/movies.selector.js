import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getPopular = (state) => {
  const { movieCard } = state;
  return movieCard || Map();
};

export const getMovies = createSelector(getPopular, (state) => {
  return state.getIn(["movieCard"]) ?? List();
});
