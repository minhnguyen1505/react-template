import { combineReducers } from "redux";
import login from "./loginReducer";
import coinsMarkets from "./coinsMarketsReducer";

const rootReducer = combineReducers({
  login,
  coinsMarkets
});

export default rootReducer;
