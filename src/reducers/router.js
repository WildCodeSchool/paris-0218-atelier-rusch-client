const initialState = {
  pageActive: 'Home'
}

const reducer = (state = initialState, action) => {
  console.log(`ACTION '${action.type}'`, { action, state })

  if (action.type === 'SET_ACTIVE_PAGE') {
    return {
      ...state,
      pageActive: action.pageActive
    }
  }

  return state
}

export default reducer
