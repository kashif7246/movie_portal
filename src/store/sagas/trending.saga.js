import { getAllPopular } from "../selectors/popular-selectors";
import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import {
  getList,
  getNowPlaying,
  getAiringTodayTvShows,
  getUpcomingMovies,
  getPopularPeople,
  getPopularMoviesOrTVShow,
} from "../services/axios/axios";
import { ConstructionOutlined } from "@mui/icons-material";
function* getPopular(action) {
  // debugger;
  try {
    console.log("kkkkkkkkk");
    const allPopular = yield call(getPopularMoviesOrTVShow);
    console.log(allPopular);
    yield put({ type: "SET_ALL_POPULAR", payload: allPopular.data.results });
  } catch (error) {}
}
function* getPlayingNow(action) {
  // debugger;
  try {
    const allPopular = yield call(getAiringTodayTvShows);
    yield put({ type: "SET_ALL_POPULAR", payload: allPopular.data.results });
  } catch (error) {}
}
function* getInTheater(action) {
  // debugger;
  try {
    const allPopular = yield call(getUpcomingMovies);
    yield put({ type: "SET_ALL_POPULAR", payload: allPopular.data.results });
  } catch (error) {}
}
function* freeToWatch() {
  try {
    const freeToWatch = yield call(getUpcomingMovies);
    yield put({ type: "SET_FREE_WATCH", payload: freeToWatch });
  } catch (error) {}
}
function* fetchTv() {
  try {
    const tv = yield call(getAiringTodayTvShows);
    yield put({ type: "TV_SHOW", payload: tv });
  } catch (error) {}
}
function* fetchTrendingData() {
  try {
    const tv = yield call(getAiringTodayTvShows);
    yield put({ type: "SET_TRENDING", payload: tv });
  } catch (error) {}
}
function* fetchTvShows() {
  try {
    const tv = yield call(getUpcomingMovies);
    yield put({ type: "SET_TRENDING", payload: tv });
  } catch (error) {}
}

// function* getMoviesTarilers(action) {
//   try {
//     const today = yield call(getAiringTodayTvShows, action.payload);
//     yield put({ type: "SET_TRAILERS_DATA", payload: today.data.results });
//   } catch (error) {}
// }
function* trending() {
  yield takeLatest("GET_ALL_POPULAR", getPopular);
  yield takeLatest("GET_NOW_pLAYING", getPlayingNow);
  yield takeLatest("GET_ALL_IN_THEATHER", getInTheater);
  yield takeLatest("TV", fetchTv);
  yield takeLatest("GET_TRENDING", fetchTrendingData);
  yield takeLatest("GET_TV_SHOWS", fetchTvShows);
  // yield takeLatest("GET_MOVIES_TRAILERS", getMoviesTarilers);
}

export default trending;
