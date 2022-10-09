import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getPopular = (state) => {
  const { popular } = state;
  return popular || Map();
};

export const getAllPopular = createSelector(getPopular, (state) => {
  return state.getIn(["data"]) ?? List();
});
