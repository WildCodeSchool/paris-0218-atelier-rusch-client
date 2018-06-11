import { createStore } from 'redux'
import fetchedArticles from './mocks/articles.json'
import fetchedFilters from './mocks/filters.json'

const initialState = {
  pageActive: 'home',
  articles: [],
  filters: [],
  data: []
}

const reducer = (state, action) => {
  // action = { type: 'LOAD_ARTICLES', articles: articles }

  if (action.type === 'LOAD_ARTICLES') {
    return {
      articles: action.articles
    }

  }

  if (action.type === 'LOAD_FILTERS') {
    return {
      ...state,
      filters: action.filters
    }
  }

  return state
}

export const store = createStore(reducer, initialState)

// export const actions = {
//   loadArticles: articles => store.dispatch({ type: 'LOAD_ARTICLES', articles: articles })
// }

export const actions = {
  loadArticles: articles => store.dispatch({ type: 'LOAD_ARTICLES', articles: fetchedArticles }),
  loadFilters: filters => store.dispatch({ type: 'LOAD_FILTERS', filters: fetchedFilters })
}

// fetch(`http://localhost:3456/articles`)
//   .then(result => result.json())
//   .then(articles => {
//     console.log(articles)
//     actions.loadArticles(articles)
//   })
//   .catch(console.error)

actions.loadArticles(fetchedArticles)
actions.loadFilters(fetchedFilters)
