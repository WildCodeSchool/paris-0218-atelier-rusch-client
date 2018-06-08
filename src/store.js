import { createStore } from 'redux'
import fetchedArticles from './mocks/articles.json'

const initialState = {
  pageActive: 'home',
  articles: [],
  data: []
}

const reducer = (state, action) => {
  // action = { type: 'LOAD_ARTICLES', articles: articles }

  if (action.type === 'LOAD_ARTICLES') {
    return {
      articles: action.articles
    }
  }

  return state
}

export const store = createStore(reducer, initialState)

// export const actions = {
//   loadArticles: articles => store.dispatch({ type: 'LOAD_ARTICLES', articles: articles })
// }

export const actions = {
  loadArticles: articles => store.dispatch({ type: 'LOAD_ARTICLES', articles: fetchedArticles })
}

// fetch(`http://localhost:3456/articles`)
//   .then(result => result.json())
//   .then(articles => {
//     console.log(articles)
//     actions.loadArticles(articles)
//   })
//   .catch(console.error)

actions.loadArticles(fetchedArticles)

