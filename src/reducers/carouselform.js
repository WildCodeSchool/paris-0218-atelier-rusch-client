const initialState = {
  forms: {
    EDIT_CAROUSEL: {
      image: [],
      legend: ''
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_INPUT_CAROUSEL_CHANGED': {
      const { formId, inputName, inputValue } = action

      const form = state.forms[formId]

      form[inputName] = inputValue

      return {
        ...state,
        image: action.image,
        legend: action.legend
      }
    }

    default: return state
  }
}

export default reducer
