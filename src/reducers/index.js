import { combineReducers } from 'redux'
import articles from './articles'
import filters from './filters'
import exemples from './exemples'
import router from './router'

const reducer = combineReducers({
  articles,
  filters,
  router,
  exemples
})

export default reducer
