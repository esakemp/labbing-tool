import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import measurementReducer from './reducer/measurementReducer'

const reducer = combineReducers({
  measurements: measurementReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store