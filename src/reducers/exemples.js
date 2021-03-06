const initialState = {
  forms: {
    ADD_ARTICLE: {
      name: 'yoann',
      age: '27'
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_INPUT_CHANGED': {
      const { formId, inputName, inputValue } = action

      const form = state.forms[formId]

      form[inputName] = inputValue

      return {
        ...state,
        filters: action.filters
      }
    }

    default: return state
  }
}

export default reducer
