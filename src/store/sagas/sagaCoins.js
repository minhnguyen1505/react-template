import { put, call } from "redux-saga/effects";
import * as apiServices from "../../services";
import types from "../actions/types";

export function* coinsMarketsSaga(payload) {
  console.log('payload', payload);
  try {
    const response = yield call(apiServices.getCoinsMarkets, payload.params);
    if (response.code === 200) {
      yield put({ type: types.COINS_MARKETS_SUCCESS, success: response });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: types.COINS_MARKETS_ERROR, error: error });
  }
}
