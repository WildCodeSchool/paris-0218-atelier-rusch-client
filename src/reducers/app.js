const initialState = {
  pageActive: 'home',
  articles: [],
  filters: []
}

const reducer = (state = initialState, action) => {
  console.log(`ACTION '${action.type}'`, { action, state })

  if (action.type === 'LOAD_ARTICLES') {
    return {
      ...state,
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

export default reducer
