import types from './types';

export const getCoinsMarketsAction = ({ params, callback }) => {
  return {
    type: types.COINS_MARKETS_REQUEST,
    params,
    callback
  };
};
