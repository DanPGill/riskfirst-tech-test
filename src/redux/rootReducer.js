import { combineReducers } from 'redux'
import calendar from './reducers/calendar'

const rootReducer = combineReducers({
  calendar,
})

export default rootReducer
