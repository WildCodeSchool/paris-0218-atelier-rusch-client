import { combineReducers } from 'redux'
import app from './app'
import exemples from './exemples'

const reducer = combineReducers({
  app,
  exemples
})

export default reducer
