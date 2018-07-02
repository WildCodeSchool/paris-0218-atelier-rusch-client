import { combineReducers } from 'redux'
import articles from './articles'
import filters from './filters'
import articleform from './articleform'
import router from './router'
import slides from './slides'
import members from './members'

const reducer = combineReducers({
  articles,
  filters,
  router,
  articleform,
  slides,
  members
})

export default reducer
