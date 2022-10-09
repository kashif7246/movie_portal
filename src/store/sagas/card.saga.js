import { act } from "react-dom/test-utils";
import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import {
  getNowPlaying,
  getPopularPeople,
  getPopularMoviesOrTVShow,
} from "../services/axios/axios";

function* getMovieCard(action) {
  try {
    const {
      payload: { categoryType },
    } = action;
    let freeWatch;
    if (categoryType.item === "popular-people") {
      freeWatch = yield call(getPopularMoviesOrTVShow, action.payload);
    } else freeWatch = yield call(getNowPlaying, action.payload);
    yield put({ type: "SET_MOVIE_CARD", payload: freeWatch.data.results });
  } catch (error) {}
}

function* movieCardSaga() {
  yield takeLatest("GET_MOVIE_CARD", getMovieCard);
}

export default movieCardSaga;
