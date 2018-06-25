const initialState = {
  allArticles: [],
  selectedArticle: [],
  filteredArticles: [],
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
    if (action.filter.isActive !== true) {
      // const addFilteredArticles = state.allArticles.filter(article => article.tags === action.filter.filterTag)
      const addFilteredArticles = state.allArticles.filter(article => article.tags.includes(action.filter.filterTag))

      // Add a function to check if one if the pushed articles is already in the array filteredArticles

      return {
        ...state,
        filteredArticles: [ ...addFilteredArticles, ...state.filteredArticles ],
      }
    }
    else {
      // const removeFromFilteredArticles = state.filteredArticles.filter(article => article.tags !== action.filter.filterTag)
      const removeFromFilteredArticles = state.filteredArticles.filter(article => article.tags.includes(!action.filter.filterTag))
      return {
        ...state,
        filteredArticles: removeFromFilteredArticles
      }
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
