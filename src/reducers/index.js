import { combineReducers } from 'redux'
import articles from './articles'
import filters from './filters'
import articleForm from './articleForm'
import router from './router'

const reducer = combineReducers({
  articles,
  filters,
  router,
  articleForm
})

export default reducer
