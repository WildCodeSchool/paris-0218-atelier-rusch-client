const initialState = {
  articles: []
}

const reducer = (state = initialState, action) => {
  console.log(`ACTION '${action.type}'`, { action, state })

  if (action.type === 'LOAD_ARTICLES') {
    return {
      ...state,
      articles: action.articles
    }
  }

  return state
}

export default reducer
