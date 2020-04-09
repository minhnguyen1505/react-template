import api from '../../common/helpers/api';
import { API_URL } from '../../common/config';

export const getCoinsMarkets = (params) => {
  return new Promise(async (resolve, reject) => {
    console.log('run api');
    try {
      // const {vs_currency, ids, order, per_page, page, sparkline, price_change_percentage} = params;
      const localParams = { ...params };
      console.log('params', localParams);
      const resp = await api.get(`${API_URL.COINS_MARKETS}`, {
        params: localParams,
        typeAPI: 'coin'
      });
      if (resp) {
        resolve({
          code: 200,
          data: resp
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};
