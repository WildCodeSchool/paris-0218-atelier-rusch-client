import React, { Component } from 'react'
import store from '../store'
import ArticlePreview, { demoArticle } from './ArticlePreview.js'
import './css/ArticleForm.css'

const freshArticle = {
  title: '',
  shortDescription: '',
  section: '',
  headerImage: '',
  content: []
}


const toInput = {
  h2: ({ element, onChange, i }) => <input type="text" name={`content-${i}`} value={element.text} onChange={onChange} />,
  p: () => <textarea type="text" />,
  blockquote: () => <input type="text" />,
  img: () => <input type="text" />,
  imgs: () => <div><input type="text" /><input type="text" /></div>,
}

const Element = ({ element, onChange, i }) => toInput[element.type]({ element, onChange, i })


class ArticleForm extends Component {
  state = {
    article: demoArticle
  }

  handleChange = event => {
    const key = event.target.name

    let article = {}

    if (key.startsWith('content')) {
      const index = key.split('-')[1]

      const content = [ ...this.state.article.content ]
      content[index].text = event.target.value // issue: either text or url or urls

      console.log({ content })

      article = {
        ...this.state.article,
        content: content
      }
    } else {
      article = {
        ...this.state.article,
        [key]: event.target.value
      }
    }

    this.setState({ article })
  }

  handleSubmit = event => {
    event.preventDefault()

    const article = this.state.article

    fetch('http://localhost:3456/articles', {
      method: 'post',
      body: JSON.stringify(article),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  addInput = type => {
    const basicContentElement = {
      h2: { "type": "h2", "text": "" },
      p: { "type": "p", "text": "" },
      blockquote: { "type": "blockquote", "text": "" },
      img: { "type": "img", "url": "" },
      imgs: { "type": "imgs", "urls": [ "", "" ] },
    }

    const article = {
      ...this.state.article,
      content: [
        ...this.state.article.content,
        basicContentElement[type]
      ]
    }

    this.setState({ article })
  }

  render () {
    const article = this.state.article

    const buttons = [ 'h2' , 'p', 'blockquote', 'img', 'imgs' ]
      .map((type, i) => <button key={i} onClick={() => this.addInput(type)}>{type}</button>)


    const dynamicInputs = article.content
      .map((element, i) => <Element key={i} i={i} element={element} onChange={this.handleChange} />)

    return (
      <div className="box">
        <div className="item-left">
          <form onSubmit={this.handleSubmit}>
            <label>Titre:
              <input type="text" name="title" value={article.title} onChange={this.handleChange} />
            </label>
            <label>Description:
            <textarea type="text" name="shortDescription" value={article.shortDescription} onChange={this.handleChange} />
            </label>
            <label>URL de l'image de couverture:
              <input type="text" name="headerImage" value={article.headerImage} onChange={this.handleChange} />
            </label>

            <div>
              <select name="section" value={article.section} onChange={this.handleChange}>
                <option value="Choose">Choose</option>
                <option value="Lab">Lab</option>
                <option value="Projet">Projet</option>
              </select>
            </div>
            {dynamicInputs}
            <div id="buttons" style={{ backgroundColor: 'cyan' }}>{buttons}</div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div className="item-right">
          <ArticlePreview article={article} />
        </div>
      </div>
    )
  }

}

export default ArticleForm
