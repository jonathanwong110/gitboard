import StocksActionTypes from "./types";

const INITIAL_STATE = {
  stocks: {}
}
const stocksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StocksActionTypes.GET_STOCKS:
      return {
        ...state,
        status: 'LOADING_COMPLETE',
        stocks: action.stocks
      }
    default:
      return state
  }
}

export default stocksReducer