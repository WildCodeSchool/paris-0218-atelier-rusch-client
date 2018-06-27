import React from 'react'
import store from '../store'
import Modale from './Modale.js'

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

    fetch('http://localhost:3456/articles', { method: 'post',
      body: JSON.stringify(newArticle),
      headers: {
        'Content-Type': 'application/json'
      } })
  }

  const form = state.articleform.forms['ADD_ARTICLE']

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h5>Titre:</h5>
          <input type="text" name="title" value={form.title} onChange={handleChange} />
          <h5>Description:</h5>
          <textarea type="text" name="shortDescription" value={form.shortDescription} onChange={handleChange}>
          </textarea>
          <h5>URL de l'image de couverture:</h5>
          <input type="text" name="headerImage" value={form.headerImage} onChange={handleChange}>
          </input>
          <select name="section" value={form.section} onChange={handleChange}>
            <option value="Choose">Choose</option>
            <option value="Lab">Lab</option>
            <option value="Projet">Projet</option>
          </select>
          <input type="submit" value="Submit" />
        </form>

        <div>
          <div className="ModalePic" style={{ background: `center / cover no-repeat url(${form.headerImage})`}}>
            <div className="ModaleHeader FilterBlack" style={{ padding: '0.1rem 0.75rem' }}>
              <h2 className="green">
                {form.title}
              </h2>
              <h3>
                {form.shortDescription}
              </h3>
              <p className="smallLink"> Site du projet </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ArticleForm
