import { fromJS } from "immutable";
import { act } from "react-dom/test-utils";

const popularInitialState = fromJS({
  data: [],
  error: "",
  freeWatch: [],
  trending: [],
  trailers: [],
});

const popularReducer = (state = popularInitialState, action) => {
  switch (action.type) {
    case "SET_ALL_POPULAR":
      return state.set("data", action.payload);
    case "SET_FREE_TO_WATCH":
      return state.set("freeWatch", action.payload.data.results);
    case "TV_SHOW":
      return state.set("trending", action.payload.data.results);
    case "SET_TAILERS":
      return state.set("trailers", action.payload.data.results);
    default:
      return state;
  }
};

export default popularReducer;
