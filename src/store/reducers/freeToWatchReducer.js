import { fromJS } from "immutable";
import { act } from "react-dom/test-utils";

const popularInitialState = fromJS({
  freeWatch: [],
});

const freeToWatchReducer = (state = popularInitialState, action) => {
  switch (action.type) {
    case "SET_FREE_WATCH":
      return state.set("freeWatch", action.payload);

    default:
      return state;
  }
};

export default freeToWatchReducer;
