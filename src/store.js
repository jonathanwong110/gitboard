import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import weatherReducer from './redux/Weather/reducer'
import newsReducer from './redux/News/reducer';
import stocksReducer from './redux/Stocks/reducer';

const reducer = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
  stocks: stocksReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store