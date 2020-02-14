import { put, call } from "redux-saga/effects";
import * as apiServices from '../../services';
import { setCookie } from "../../common/helpers/cookies";
import types from "../actions/types";

export function* loginSaga(payload) {
  try {
    const response = yield call(apiServices.login, payload.data);
    if (response.code === 200) {
      yield put({ type: types.LOGIN_REQUEST_SUCCESS, success: response});
      yield call(setCookie("token", response.data.key, 8));
    } else {
      throw response
    }
  } catch (error) {
    yield put({ type: types.LOGIN_REQUEST_ERROR, error });
  }
}
