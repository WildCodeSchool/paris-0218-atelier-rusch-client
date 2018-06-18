import { combineReducers } from 'redux'
import articles from './articles'
import filters from './filters'
import articleform from './articleform'
import router from './router'

const reducer = combineReducers({
  articles,
  filters,
  router,
  articleform
})

export default reducer
