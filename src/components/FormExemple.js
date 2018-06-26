/* import React from 'react'
import store from '../store'

const FormExemple = () => {

  const state = store.getState()

  const handleChange = event => {
    console.log({ target: event.target, [event.target.name]: event.target.value })

    store.dispatch({
      type: 'FORM_INPUT_CHANGED',
      formId: 'ADD_ARTICLE',
      inputName: event.target.name,
      inputValue: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const state = store.getState()
    const newArticle = state.exemples.forms['ADD_ARTICLE']

    console.log('SUBMIT', newArticle)
    // fetch('/articles', { method: 'POST', body: JSON.stringify(newArticle) })
  }

  const form = state.exemples.forms['ADD_ARTICLE']

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={form.age} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default FormExemple */
