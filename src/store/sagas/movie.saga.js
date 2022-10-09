import { act } from "react-dom/test-utils";
import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import { getTrending } from "../actions/action";
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

function* MovieSaga() {
  yield takeLatest("GET_POPULAR_MOVIES", getPopularMovies);
  yield takeLatest("GET_UPCOMING_MOVIES", getUpcomingMovies);
  yield takeLatest("GET_NOW_PLAYING_MOVIES", getNowPlayingMovies);
  yield takeLatest("GET_TRENDING_MOVIES", getTrendingMovies);
}

export default MovieSaga;
