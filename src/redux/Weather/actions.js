import axios from 'axios'
import WeatherActionTypes from "./types";
import { weatherAPI } from '../../API/keys'

export const getWeatherForecastFromLocation = (lat, lon) => {
  return (dispatch) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPI.key}`).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }).catch(function (error) {
      alert("Location is not enabled. Search for a city.");
    });
  }
}

export const getWeatherForecastFromSearch = (query) => {
  return (dispatch) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=${weatherAPI.key}`).then(res => {
      let coordinates = {
        latitude: res.data.coord.lat,
        longitude: res.data.coord.lon
      }
      localStorage.setItem("location", JSON.stringify(coordinates))
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }).catch(function (error) {
      alert("City not found. Please try again.");
    });
  }
}