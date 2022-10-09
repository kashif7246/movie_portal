import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getPopular = (state) => {
  const { trending } = state;
  return trending || Map();
};

export const getAllTrending = createSelector(getPopular, (state) => {
  return state.getIn(["trending"]) || List();
});
