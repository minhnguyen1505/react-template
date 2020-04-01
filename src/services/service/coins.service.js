import * as coinsApi from "../api/coins.api";

export const getCoinsMarkets = (params) => {
  return new Promise(resolve => {
    console.log("run actions");
    coinsApi
      .coinsMarkets(params)
      .then(resp => {
        resolve({
          code: 200,
          data: resp
        });
      })
      .catch(err => {
        resolve({
          code: err.code,
          err: err
        });
      });
  });
};
