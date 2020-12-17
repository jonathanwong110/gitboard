import axios from 'axios'
import StocksActionTypes from "./types";
import { stocksAPI } from '../../API/keys'

export const getStocks = () => {
  return (dispatch) => {
    axios.get("").then(res => {
      dispatch({ type: StocksActionTypes.GET_STOCKS, stocks: res.data })
    }
    )
  }
}