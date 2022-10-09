import { fromJS } from "immutable";
import { act } from "react-dom/test-utils";

const popularInitialState = fromJS({
  trending: [],
});

const trendingReducer = (state = popularInitialState, action) => {
  switch (action.type) {
    case "SET_TRENDING":
      return state.set("trending", action.payload.data.results);

    default:
      return state;
  }
};

export default trendingReducer;
