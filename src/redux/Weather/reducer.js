import WeatherActionTypes from "./actions";

const INITIAL_STATE = {
  weather: {}
}
const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER_FORECAST:
      return {
        ...state,
        status: 'LOADING_COMPLETE',
        tasks: action.tasks
      }
    default:
      return state
  }
}

export default weatherReducer