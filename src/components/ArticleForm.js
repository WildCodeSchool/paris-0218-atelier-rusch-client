import React from 'react'
import store from '../store'

const ArticleForm = () => {

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
    const newArticle = state.articleform.forms['ADD_ARTICLE']

    console.log('SUBMIT', newArticle)
    console.log('SUBMIT', JSON.stringify(newArticle))

    fetch('http://localhost:3456/articles', { method: 'post', body: JSON.stringify(newArticle), headers: {
            'Content-Type': 'application/json'
        } })
  }

  }
  const form = state.articleform.forms['ADD_ARTICLE']

  return (
    <form onSubmit={handleSubmit}>
      <h3>Titre:</h3>
      <input type="text" name="title" value={form.title} onChange={handleChange} />
      <h3>Description:</h3>
      <textarea type="text" name="shortDescription" value={form.shortDescription} onChange={handleChange}>
      </textarea>
      <h3>Contenu:</h3>
      <textarea type="text" name="content" value={form.content} onChange={handleChange}>
      </textarea>
      <select name="section" value={form.section} onChange={handleChange}>
        <option value="Choose">Choose</option>
        <option value="Lab">Lab</option>
        <option value="Projet">Projet</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ArticleForm
