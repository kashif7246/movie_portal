import popularReducer from "./popular.reducer";
import trendingReducer from "./trending.reducer";
import freeToWatchReducer from "./freeToWatchReducer";
import trailersReducer from "./trailers.Reducer";
import movieCardReducer from "./movie-card.reducer";

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "../sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const rootReducer = combineReducers({
  popular: popularReducer,
  freeWatch: freeToWatchReducer,
  trending: trendingReducer,
  trailers: trailersReducer,
  movieCard: movieCardReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(sagas);
export default store;
