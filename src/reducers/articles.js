const initialState = {
  allArticles: [],
  selectedArticle: [],
  displayModale: 'none'
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

  if (action.type === 'LOAD_MODALE'){
    const selectedArticle = state.allArticles.find(article => article.id === action.id)

    return {
      ...state,
      selectedArticle: selectedArticle,
      displayModale: 'block'
    }
  }

  if (action.type === 'CLOSE_MODALE') {
    return {
      ...state,
      displayModale: 'none'
    }
  }

  return state
}

export default reducer
