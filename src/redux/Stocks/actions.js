import axios from 'axios'
import StocksActionTypes from "./types";
import { stocksAPI } from '../../API/keys'

export const getStocks = (query) => {
  return (dispatch) => {
    axios.get(`${stocksAPI.base}${query}&apikey=${stocksAPI.key}`).then(res => {
      dispatch({ type: StocksActionTypes.GET_STOCKS, stocks: res.data })
    }
    )
  }
}