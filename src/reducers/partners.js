const initialState = {
  allPartners: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_PARTNERS') {
    return {
      ...state,
      allPartners: action.partners
    }
  }
  return state
}

export default reducer
