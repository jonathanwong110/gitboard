import axios from 'axios'
import WeatherActionTypes from "./types";
import { weatherAPI } from '../../API/keys'

export const getWeatherForecastFromLocation = (lat, lon) => {
  return (dispatch) => {
    axios.get(`${weatherAPI.base}lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPI.key}`).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }).catch(function (error) {
      alert("Location is not enabled. Search for a city.");
    });
  }
}

export const getWeatherForecastFromSearch = (query) => {
  return (dispatch) => {
    axios.get(`${weatherAPI.base}q=${query}&units=imperial&APPID=${weatherAPI.key}`).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }).catch(function (error) {
      alert("City not found. Please try again.");
    });
  }
}