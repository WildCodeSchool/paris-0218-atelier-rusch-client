const initialState = {
  allArticles: []
}

const reducer = (state = initialState, action) => {
  console.log(`ACTION '${action.type}'`, { action, state })

  if (action.type === 'LOAD_ARTICLES') {
    return {
      ...state,
      allArticles: action.articles
    }
  }

  if (action.type === 'FILTER_ARTICLES') {

    return {
      ...state,
      allArticles: action.articles.filter(article => article.tags === "Mobilité")
    }
  }

  return state
}

export default reducer
