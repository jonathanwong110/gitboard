import axios from 'axios'
import WeatherActionTypes from "./types";
import { weatherAPI } from '../../API/keys'

export const getWeatherForecast = (query) => {
  return (dispatch) => {
    axios.get(`${weatherAPI.base}q=Brooklyn&units=imperial&APPID=${weatherAPI.key}`).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }).catch(function (error) {
      alert(error)
    });
  }
}