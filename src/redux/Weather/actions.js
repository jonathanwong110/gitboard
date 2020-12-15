import axios from 'axios'
import WeatherActionTypes from "./types";
import { weatherAPI } from '../../API/keys'

export const getWeatherForecast = (lat, lon) => {
  return (dispatch) => {
    axios.get(`${weatherAPI.base}lat=${lat}&lon=${lon}&appid=${weatherAPI.key}`).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }
    )
  }
}