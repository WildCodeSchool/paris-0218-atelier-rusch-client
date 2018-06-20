import React from 'react'
import store from '../store'

const CarouselForm = () => {

  const state = store.getState()

  const handleChange = event => {
    //console.log({ target: event.target, [event.target.name]: event.target.value })

    store.dispatch({
      type: 'FORM_INPUT_CAROUSEL_CHANGED',
      formId: 'EDIT_CAROUSEL',
      inputName: event.target.name,
      inputValue: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const state = store.getState()
    const newArticle = state.articleform.forms['ADD_ARTICLE']

    //console.log('SUBMIT', newArticle)
    //console.log('SUBMIT', JSON.stringify(newArticle))

    // fetch('http://localhost:3456/articles', { method: 'post', body: JSON.stringify(newArticle), headers: {
    //         'Content-Type': 'application/json'
    //     } })
  }

  const form = state.carouselform.forms['EDIT_CAROUSEL']

  return (
    <form onSubmit={handleSubmit}>
      <h3>Légende</h3>
      <input type="text" name="legend" value={form.legend} onChange={handleChange} />
      <h3>URL de l'image</h3>
      <textarea type="text" name="image" value={form.image} onChange={handleChange}>
      </textarea>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CarouselForm
