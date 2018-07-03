import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import store from '../store'
// import ArticlePreview, { demoArticle } from './ArticlePreview.js'
import Modale from './Modale.js'
import './css/ArticleForm.css'
import { loadArticles } from '../actions.js'

const updateArticle = (props) => {
  selectedArticle = props.data.find(el => el.id === props.id)

}

const freshArticle = {
  title: '',
  shortDescription: '',
  section: '',
  headerImage: '',
  tags:'',
  hasStar:false,
  content: []
}

const H2 = ({ element, ...rest }) => {
  return (
    <label>Ajouter un titre de paragraphe :
    <input type="text" value={element.value} {...rest} autoFocus />
  </label>
  )
}

const P = ({ element, ...rest }) => {
  return (
    <label>Ajouter un paragraphe :
    <textarea type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const Blockquote = ({ element, ...rest }) => {
  return (
    <label>Ajouter une citation :
    <input type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const Imgs = ({ element, ...rest }) => {
  return (
    <label>Ajouter des images :
    <input type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const toInput = {
  h2: (props) => <H2 {...props} />,
  p: (props) => <P {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  imgs: (props) => <Imgs {...props} />,
}

const Element = (props) => toInput[props.element.type](props)

class ArticleUpdate extends Component {
  state = {
    article: freshArticle // demoArticle
  }

  handleChange = event => {
    const key = event.target.name

    let article = {}

    if (key.startsWith('content')) {
      const index = key.split('-')[1]

      const content = [ ...this.state.article.content ]
      content[index].value = event.target.value // issue: either text or url or urls

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

    const article = {

      title: this.state.article.title,
      shortDescription: this.state.article.shortDescription,
      headerImage: this.state.article.headerImage,
      section: this.state.article.section,
      hasStar: this.state.article.hasStar,
      tags: this.state.article.tags,
      content: JSON.stringify(this.state.article.content)
    }
    console.log(this.state.article)
    console.log('submit', article)

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
      h2: { "type": "h2", "value": "" },
      p: { "type": "p", "value": "" },
      blockquote: { "type": "blockquote", "value": "" },
      imgs: { "type": "imgs", "value": "" },
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
    console.log(this.state.hasStar)

    const article = this.state.article

    const buttons = [ 'h2' , 'p', 'blockquote', 'imgs' ]
      .map((type, i) => <input type='button' key={i} onClick={() => this.addInput(type)} value={type} />)

    const dynamicInputs = article.content
      .map((element, i) => <Element key={i} name={`content-${i}`} element={element} onChange={this.handleChange} />)

    return (
    <div>
      <AdminNav />
      <div className="spacer"></div>
      <div className="box">

        <div className="item-left">
          <div style={{marginTop: '15px'}}>
            <form onSubmit={this.handleSubmit}>
              <label>Titre de l'article :<br/>
                <input type="text" name="title" value={article.title} onChange={this.handleChange} />
              </label>
              <label>Description de l'article :<br/>
              <textarea type="text" name="shortDescription" value={article.shortDescription} onChange={this.handleChange} />
              </label>
              <label>URL de l'image de couverture:<br/>
                <input type="text" name="headerImage" value={article.headerImage} onChange={this.handleChange} />
              </label>
              <label>Tags de l'article :<br/>
                <input type="text" name="tags" value={article.tags} onChange={this.handleChange} />
              </label>
              <label>
              <input style={{width: '20px', marginRight: '5px'}} type="checkbox" name="hasStar" onClick={() => this.setState({hasStar: !this.state.hasStar}) } />
              Mettre à la une</label>
              <div>
                <select name="section" value={article.section} onChange={this.handleChange}>
                  <option value="Choose">Choisissez la section</option>
                  <option value="Lab">Lab</option>
                  <option value="Projet">Projet</option>
                </select>
              </div>

              <div className="addModule yellow">Ajouter un module :</div>
              {dynamicInputs}
              <div id="buttons" style={{ backgroundColor: '#fbd052', marginBottom: '20px' }}>{buttons}</div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className="item-right">
          <Modale article={article} />
        </div>
      </div>
    </div>
    )
  }

}

export default ArticleUpdate
