const initialState = {
  allFilters: []
}

const reducer = (state = initialState, action) => {
  console.log(`ACTION '${action.type}'`, { action, state })

  if (action.type === 'LOAD_FILTERS') {
    return {
      ...state,
      allFilters: action.filters
    }
  }

  return state
}

export default reducer
