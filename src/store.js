import { createStore } from 'redux'

const initialState = {
  pageActive: 'home',
  articles: []
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

export const actions = {
  loadArticles: articles => store.dispatch({ type: 'LOAD_ARTICLES', articles: articles })

}

fetch(`http://localhost:3003/article`)
  .then(result => result.json())
  .then(articles => {
    console.log(articles)
    actions.loadArticles(articles)
  })
  .catch(console.error)

