import WeatherActionTypes from "./types";

const INITIAL_STATE = {
  weather: {}
}
const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER_FORECAST:
      return {
        ...state,
        status: 'LOADING_COMPLETE',
        weather: action.weather
      }
    default:
      return state
  }
}

export default weatherReducer