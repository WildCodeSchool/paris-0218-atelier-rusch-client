const initialState = {
  pageActive: 'Home'
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_ACTIVE_PAGE') {
    return {
      ...state,
      pageActive: action.pageActive
    }
  }

  return state
}

export default reducer
