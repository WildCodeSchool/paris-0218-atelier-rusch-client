const initialState = {
  allSlides: []
}

const reducer = (state = initialState, action) => {
  console.log(`ACTION '${action.type}'`, { action, state })

  if (action.type === 'LOAD_SLIDES') {
    return {
      ...state,
      allSlides: action.slides
    }
  }

  return state
}

export default reducer
