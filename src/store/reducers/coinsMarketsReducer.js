import types from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case types.COINS_MARKETS_SUCCESS:
      return { ...state, ...action };
    case types.COINS_MARKETS_ERROR:
      return { ...state, ...action };
    default:
      return state;
  }
}
