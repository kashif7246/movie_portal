import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getPopular = (state) => {
  const { freeWatch } = state;
  return freeWatch || Map();
};

export const getFreeAllToWatch = createSelector(getPopular, (state) => {
  return state.getIn(["freeWatch"]) ?? List();
});
