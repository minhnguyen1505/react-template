import { put, call } from "redux-saga/effects";
import * as apiServices from '../../services';
import { setCookie } from "../../common/helpers/cookies";
import types from "../actions/types";

export function* loginSaga(payload) {
  try {
    const response = yield call(apiServices.login, payload.user);
    yield put({ type: types.LOGIN_USER_SUCCESS, payload: response });
    yield call(setCookie("token", response.key, 1));
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, payload: error });
  }
}
