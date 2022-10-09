import { all, fork } from "redux-saga/effects";
import trending from "./trending.saga";
import freeToWatchSaga from "./freeToWatch.saga";
import TrailersSaga from "./Trailers.saga";
import movieCardSaga from "./card.saga";

export default function* () {
  yield all([
    fork(freeToWatchSaga),
    fork(trending),
    fork(TrailersSaga),
    fork(movieCardSaga),
  ]);
}
