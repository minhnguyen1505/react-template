import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./sagaAuth";
import * as coinSaga from "./sagaCoins";


import types from "../actions/types";

export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
  
  yield takeLatest(types.COINS_MARKETS_REQUEST, coinSaga.coinsMarketsSaga);
}
