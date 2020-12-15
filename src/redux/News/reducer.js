import NewsActionTypes from "./types";

const INITIAL_STATE = {
  news: {}
}
const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.GET_TOP_NEWS:
      return {
        ...state,
        status: 'LOADING_COMPLETE',
        news: action.news
      }
    default:
      return state
  }
}

export default newsReducer