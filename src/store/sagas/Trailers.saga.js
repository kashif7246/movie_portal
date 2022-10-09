import { act } from "react-dom/test-utils";
import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import {
  getNowPlaying,
  getUpcomingMovies,
  getPopularMoviesOrTVShow,
  getOnAiredTvShows,
  getAiringTodayTvShows,
} from "../services/axios/axios";

function* getMovies(action) {
  try {
    const freeWatch = yield call(getNowPlaying, action.payload);
    yield put({ type: "SET_TRAILERS_DATA", payload: freeWatch.data.results });
  } catch (error) {}
}
function* getTvShows(action) {
  try {
    const freeWatch = yield call(getAiringTodayTvShows, action.payload);
    yield put({ type: "SET_TRAILERS_DATA", payload: freeWatch.data.results });
  } catch (error) {}
}
function* getForRent(action) {
  try {
    const freeWatch = yield call(getPopularMoviesOrTVShow, action.payload);

    yield put({ type: "SET_TRAILERS_DATA", payload: freeWatch.data.results });
  } catch (error) {}
}
function* getInTheaters(action) {
  try {
    const freeWatch = yield call(getOnAiredTvShows, action.payload);

    yield put({ type: "SET_TRAILERS_DATA", payload: freeWatch.data.results });
  } catch (error) {}
}

function* TrailersSaga() {
  yield takeLatest("GET_MOVIES_TRAILERS", getMovies);
  yield takeLatest("GET_TV_TRAILERS", getTvShows);
  yield takeLatest("GET_ALL_FOR_RENT", getForRent);
  yield takeLatest("GET_IN_THEATERS", getInTheaters);
}

export default TrailersSaga;
