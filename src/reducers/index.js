import { combineReducers } from 'redux'
import articles from './articles'
import filters from './filters'
import articleform from './articleform'
import carouselform from './carouselform'
import router from './router'

const reducer = combineReducers({
  articles,
  filters,
  router,
  articleform,
  carouselform
})

export default reducer
