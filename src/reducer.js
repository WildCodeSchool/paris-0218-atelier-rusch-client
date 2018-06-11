const initialState = {
  pageActive: 'home',
  articles: [],
  filters: [],
  data: []
}

const reducer = (state = initialState, action) => {
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
