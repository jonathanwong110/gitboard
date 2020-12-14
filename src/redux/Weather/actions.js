import axios from 'axios'
import WeatherActionTypes from "./types";
import { weatherAPI } from '../../API/keys'

export const getWeatherForecast = (weatherLatitude, weatherLongitude) => {
  return (dispatch) => {
    axios.get(`${weatherAPI.base}weather?q=${'Brooklyn'}&units=imperial&APPID=${weatherAPI.key}`).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }
    )
  }
}