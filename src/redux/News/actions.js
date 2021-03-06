import axios from 'axios'
import NewsActionTypes from "./types";
import { newsAPI } from '../../API/keys'

export const getTopNews = (section) => {
  return (dispatch) => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${newsAPI.key}`).then(res => {
      dispatch({ type: NewsActionTypes.GET_TOP_NEWS, news: res.data })
    }
    )
  }
}