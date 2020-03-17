import types from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST_SUCCESS:
      return { ...state, response: action };
    case types.LOGIN_REQUEST_ERROR:
      return { ...state, response: action };
    default:
      return state;
  }
}
