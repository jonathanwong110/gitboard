import axios from 'axios'

const baseURL = 'http://localhost:3000/api/v1/books/'
const WeatherActionTypes = {
  GET_WEATHER_FORECAST: 'GET_WEATHER_FORECAST'
}

export const getWeatherForecast = () => {
  return (dispatch) => {
    axios.get(baseURL).then(res => {
      dispatch({ type: WeatherActionTypes.GET_WEATHER_FORECAST, weather: res.data })
    }
    )
  }
}