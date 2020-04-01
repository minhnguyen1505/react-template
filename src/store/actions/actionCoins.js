import types from "./types";

export const getCoinsMarketsAction = (params) => {
  return { type: types.COINS_MARKETS_REQUEST, params };
};
