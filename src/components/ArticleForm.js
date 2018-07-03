import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import Modale from './Modale.js'
import './css/ArticleForm.css'
import { Container, Draggable } from 'react-smooth-dnd'

const freshArticle = {
  title: '',
  shortDescription: '',
  section: '',
  headerImage: '',
  tags:'',
  hasStar:false,
  content: []
}

export const demoArticle = {
  "id": "1",
  "section": "Lab",
  "title": "Conception participative d’espace Massy Opéra",
  "shortDescription": "Projet de réaménagement participatif du square de Grenoble à Massy porté par Erigère",
  "coverImage": "https://i.imgur.com/E0ZNDjU.png",
  "createdAt": "2018-06-07",
  "textContent": "En février 2017, Chartres Métropole inaugurait la première tranche de la future Cité de l’innovation, qui porte le nom du CM 101. Le premier lot offre déjà plus de 1150 m² de surface aménagées et accueille un incubateur (géré par le Centre Européen d’Entreprise et d’Innovation de la région Centre), 13 jeunes pousses, un espace de co-working, un espace de restauration, des salles de réunion et un mini Fablab. Ce projet nous tient particulièrement à cœur car nous revenons sur une de nos premières réalisations ! En 2016 Chartres Métropole nous avait missionné pour réunir les résidents, futurs résidents et partenaires de la Cité et réfléchir à la vision du site, sa forme, ses usages et fonctionnalités. L’ensemble du travail de co-construction avait été remis aux architectes pour intégrer les problématiques, besoins et idées dans la planification des futurs espaces. En découvrant les hangars transformés et donc le résultat des post-its remplis par des idées et des croquis, nous avons hâte d’y apporter une nouvelle touche de design de service ! A l’horizon 2019, la Cité de l’innovation représentera plus de 5100 m² avec l’ouverture de deux nouveaux bâtiments, capables d’accueillir un écosystème complet mettant en valeur l’innovation à 360°. C’est à dire, un environnement propice au développement de projets innovants des jeunes pousses, des étudiants, des chercheurs, des TPE/PME, des grandes entreprises; où chacun pourra interagir avec un réseau de professionnels, d’institutionnels et d’experts. Pour ses futurs locaux, Chartres Métropole a recensé auprès des résidents actuels et futurs, le besoin d’un accompagnement continu sur la communication et une aide en marketing. De ce constat, est née l’idée de proposer un « marketing lab ». Notre mission de cette année sera d’accompagner la définition, la co-conception et la mise en place d’un lieu de service marketing et communication au sein du CM101. En partenariat avec l’agence UZFUL, agence spécialisée en marketing engagé et avec la participation des résidents, futurs résidents, partenaires et acteurs ressources du territoire, nous rendrons tangible ce concept inédit.",
  "content": [
    { "type": "h2", "value": "Contexte et démarche" },
    { "type": "p", "value": "Le quartier Massy Opéra est inscrit dans la géographie prioritaire de la politique de la ville, et à ce titre est concerné par le Contrat de Ville 2015-2020 de la Communauté d’agglomération PARIS-SACLAY.\n\nSa vocation est de mobiliser l’ensemble des partenaires institutionnels et les habitants dans la poursuite d’un triple objectif : réduire les écarts de développement entre quartiers en difficulté et leur aire urbaine environnante, améliorer les conditions de vie des habitants, et développer l’attractivité de ces quartiers." },
    { "type": "imgs", "value": "https://i.imgur.com/lfmOYAQ.png" },
    { "type": "h2", "value": "Enjeux" },
    { "type": "p", "value": "L’enjeu de la démarche est la réappropriation des squares par ses habitants. L’objectif est de composer avec l’existant et d’apporter des améliorations paysagères et physiques dans les squares." },
    { "type": "blockquote", "value": "Ensemble, réinventions le square de Grenoble !" },
    { "type": "p", "value": "La démarche vise à interroger les habitants et de recueillir leurs attentes et les améliorations souhaitées sur le square de Grenoble et de Belfort. Nous leur proposerons ensuite de manière pédagogique et ludique d’imaginer du mobilier et un embellissement paysager de leurs squares. L’objectif final des ateliers est de les faire participer au chantier d’embellissement et d’installation d’un nouveau mobilier au printemps 2017 pour le square de Grenoble." },
    { "type": "imgs", "value": "https://i.imgur.com/WRyn5ee.png, https://i.imgur.com/U3ArH2H.png" },
    { "type": "p", "value": "Nous leur proposerons ensuite de manière pédagogique et ludique d’imaginer du mobilier et un embellissement paysager de leurs squares. L’objectif final des ateliers est de les faire participer au chantier d’embellissement et d’installation d’un nouveau mobilier au printemps 2017 pour le square de Grenoble." },
    { "type": "imgs", "value": "https://i.imgur.com/2AfzUUR.png, https://i.imgur.com/qYqkxKH.png" },
    { "type": "p", "value": "La deuxième année du projet s’intéressera au réaménagement participatif du square de Belfort. La deuxième année du projet s’intéressera au réaménagement participatif du square de Belfort." }
  ]
}

const H2 = ({ element, ...rest }) => {
  return (
    <label className='draggableElement'>Ajouter un titre de paragraphe :
    <input type="text" value={element.value} {...rest} autoFocus />
  </label>
  )
}

const P = ({ element, ...rest }) => {
  return (
    <label className='draggableElement'>Ajouter un paragraphe :
    <textarea type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const Blockquote = ({ element, ...rest }) => {
  return (
    <label className='draggableElement'>Ajouter une citation :
    <input type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const Imgs = ({ element, ...rest }) => {
  return (
    <label className='draggableElement'>Ajouter des images :
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

const moveElement = (array, fromIndex, toIndex) => {
  const elem = array[fromIndex]
  const popedArray = array.filter((_, index) => index !== fromIndex)

  return [
    ...popedArray.slice(0, toIndex),
    elem,
    ...popedArray.slice(toIndex)
  ]
}

class ArticleForm extends Component {
  state = {
    article: freshArticle
  }

  handleDnd = ({ removedIndex: fromIndex, addedIndex: toIndex }) => {
    const content = this.state.article.content
    const reorderedContent = moveElement(content, fromIndex, toIndex)

    const updatedArticle = {
      ...this.state.article,
      content: reorderedContent
    }

    this.setState({ article: updatedArticle })
  }

  handleChange = event => {
    const key = event.target.name

    let article = {}

    if (key.startsWith('content')) {
      const index = key.split('-')[1]

      const content = [ ...this.state.article.content ]
      content[index].value = event.target.value

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

  componentDidMount (props) {
    console.log('MOUNT', props)
  }

  render () {
    const article = this.state.article

    const buttons = [ 'h2' , 'p', 'blockquote', 'imgs' ]
      .map((type, i) => <input type='button' key={i} onClick={() => this.addInput(type)} value={type} />)

    const dynamicInputs = article.content
      .map((element, i) =>
        <Draggable key={i}>
          <Element name={`content-${i}`} element={element} onChange={this.handleChange} />
        </Draggable>)

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
              <Container onDrop={this.handleDnd}>
                {dynamicInputs}
              </Container>
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

export default ArticleForm
