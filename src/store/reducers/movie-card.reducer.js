import { fromJS } from "immutable";
import { act } from "react-dom/test-utils";

const popularInitialState = fromJS({
  movieCard: [],
});

const movieCardReducer = (state = popularInitialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_CARD":
      return state.set("movieCard", action.payload);

    default:
      return state;
  }
};

export default movieCardReducer;
