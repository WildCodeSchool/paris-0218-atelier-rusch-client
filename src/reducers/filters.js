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

  if (action.type === 'TOGGLE_FILTERS') {
    const i = state.allFilters.findIndex(filter => filter.id === action.id)
    const allFilters = [ ...state.allFilters ]
    allFilters[i] = { ...allFilters[i], isActive: !allFilters[i].isActive }

    return {
      ...state,
      allFilters
    }
  }
  return state
}

export default reducer
