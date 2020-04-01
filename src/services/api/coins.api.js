import api from "../../common/helpers/api";
import { API_URL } from "../../common/config";

export const coinsMarkets = (params) => {
    return new Promise(async (resolve, reject) => {
        console.log("run api");
        try {
            // const {vs_currency, ids, order, per_page, page, sparkline, price_change_percentage} = params;
            const localParams = { ...params };
            console.log('params', localParams);
            const resp = await api.get(`${API_URL.COINS_MARKETS}`, {
                params: localParams, typeAPI: "coin"
            });
            if (resp) {
                console.log("run here", resp);
                resolve(resp);
            }
        } catch (err) {
            reject(err);
        }
    });
};