import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getPopular = (state) => {
  const { trailers } = state;
  return trailers || Map();
};

export const getAllTrailers = createSelector(getPopular, (state) => {
  return state.getIn(["trailers"]) || List();
});
