const initialState = {
  allMembers: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_MEMBERS') {
    return {
      ...state,
      allMembers: action.members
    }
  }
  return state
}

export default reducer
