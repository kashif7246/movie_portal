import { act } from "react-dom/test-utils";
import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import { getNowPlaying } from "../services/axios/axios";

function* getPopular(action) {
  try {
    const freeWatch = yield call(getNowPlaying, action.payload);
    yield put({ type: "SET_FREE_WATCH", payload: freeWatch.data.results });
  } catch (error) {}
}

function* freeToWatchSaga() {
  yield takeLatest("FREE_TO_WATCH", getPopular);
}

export default freeToWatchSaga;
