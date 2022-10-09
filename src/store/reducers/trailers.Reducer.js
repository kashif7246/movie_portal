import { fromJS } from "immutable";
import { act } from "react-dom/test-utils";

const popularInitialState = fromJS({
  trailers: [],
});

const trailersReducer = (state = popularInitialState, action) => {
  switch (action.type) {
    case "SET_TRAILERS_DATA":
      return state.set("trailers", action.payload);
    default:
      return state;
  }
};

export default trailersReducer;
