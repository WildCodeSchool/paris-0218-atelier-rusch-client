import React, { Component } from 'react'
import store from '../store'

class FormExemple extends Component {
  constructor () {
    super()

    this.state = store.getState()
  }

  handleChange = event => {
    console.log({ target: event.target, [event.target.name]: event.target.value })

    store.dispatch({
      type: 'FORM_INPUT_CHANGED',
      formId: 'ADD_ARTICLE',
      inputName: event.target.name,
      inputValue: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const state = store.getState()
    const newArticle = state.exemples.forms['ADD_ARTICLE']

    console.log('SUBMIT', newArticle)
    // fetch('/articles', { method: 'POST', body: JSON.stringify(newArticle) })
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render () {
    const form = this.state.exemples.forms['ADD_ARTICLE']

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={form.age} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default FormExemple
