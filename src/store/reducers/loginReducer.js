import types from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response: action.payload };
    case types.LOGIN_USER_ERROR:
      return { ...state, response: action.payload };
    default:
      return state;
  }
}
