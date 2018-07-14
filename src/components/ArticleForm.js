import React, { Component } from 'react'
import AdminNav from './AdminNav.js'
import Modale from './Modale.js'
import { Container, Draggable } from 'react-smooth-dnd'
import './css/ArticleForm.css'
import store from '../store.js'

const freshArticle = {
  title: '',
  shortDescription: '',
  projectLink: '',
  section: '',
  headerImage: '',
  tags: [],
  hasStar: '0',
  content: [],
  partners: [],
  isDraft: false
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
      <textarea type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const Caption = ({ element, ...rest }) => {
  return (
    <label className='draggableElement'>Ajouter une légende :
      <textarea type="text" value={element.value} {...rest} autoFocus />
    </label>
  )
}

const Abstract = ({ element, ...rest }) => {
  return (
    <label className='draggableElement'>Ajouter un abstract :
      <textarea type="text" value={element.value} {...rest} autoFocus />
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
  caption: (props) => <Caption {...props} />,
  abstract: (props) => <Abstract {...props} />,
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
    article: this.props.article || freshArticle,
    errorPost: ''
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

    let errorPost = ''

    if (key.startsWith('content')) {
      const index = key.split('-')[1]

      const content = [ ...this.state.article.content ]
      content[index].value = event.target.value

      article = {
        ...this.state.article,
        content: content
      }
    } else if (key.startsWith('hasStar')) {
      article = {
        ...this.state.article,
        hasStar: this.state.article.hasStar === '1' ? '0' : '1'
      }
    } else if (key.startsWith('section')) {
      this.setState({ errorPost: '' })
      article = {
      ...this.state.article,
      section: event.target.value,
      tags: []
      }
    } else if (key.startsWith('tags')) {
      this.setState({ errorPost: '' })
      if (this.state.article.tags.includes(event.target.value)) {
        article = {
          ...this.state.article,
          tags: this.state.article.tags.filter(tag => tag !== event.target.value)
        }
      } else {
        article = {
          ...this.state.article,
          tags: [ ...this.state.article.tags, event.target.value ]
        }
      }
    } else if (key.startsWith('partners')) {
      if (this.state.article.partners.includes(event.target.value)) {
        article = {
          ...this.state.article,
          partners: this.state.article.partners.filter(partner => partner !== event.target.value)
        }
      } else {
        article = {
          ...this.state.article,
          partners: [ ...this.state.article.partners, event.target.value ]
        }
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
    if (this.state.article.tags.length === 0) {
      this.setState({ errorPost: '* Veuillez sélectionner un tag minimum.' })
    } else if (event.target.name.startsWith('isDraft')) {
      const article = {
      ...this.state.article,
      isDraft: true
      }
      this.setState({ article })
      setTimeout(this.props.submitArticle(this.state.article), 1000)
      // window.location.pathname = '/admin/articles'
    } else {
      const article = {
      ...this.state.article,
      isDraft: false
      }
      this.setState({ article })
      this.props.submitArticle(this.state.article)
      window.location.pathname = '/admin/articles'
    }
  }

  addInput = type => {
    const basicContentElement = {
      h2: { "type": "h2", "value": "" },
      p: { "type": "p", "value": "" },
      blockquote: { "type": "blockquote", "value": "" },
      caption: { "type": "caption", "value": "" },
      abstract: { "type": "abstract", "value": "" },
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
    console.log(this.state.article)
    const article = this.state.article

    const buttons = [
      { type: 'h2', value: 'Titre de paragraphe' },
      { type: 'p', value: 'Paragraphe' },
      { type: 'blockquote', value: 'Citation' },
      { type: 'caption', value: 'Légende' },
      { type: 'abstract', value: 'Abstract' },
      { type: 'imgs', value: 'Images' },
    ].map((button, i) => <input type='button' key={button.i} onClick={() => this.addInput(button.type)} value={button.value} />)

    const dynamicInputs = article.content
      .map((element, i) =>
        <Draggable key={i}>
          <Element key={i} name={`content-${i}`} element={element} onChange={this.handleChange} />
        </Draggable>)

    const state = store.getState()

    const TagCard = ({ tag }) =>
      <button key={tag.id} type="button" name="tags"
        className={this.state.article.tags.includes(`${tag.filterTag}`) ? 'TagCard TagCardSelected' : 'TagCard'}
        value={tag.filterTag}
        onClick={this.handleChange}>
          {tag.filterTag}
      </button>

    const TagCards = state.filters.allFilters
    .filter(tag => this.state.article.section === tag.section)
    .map(tag => <TagCard tag={tag} />)

    const PartnerCard = ({ partner }) =>
    <button key={partner.id} type="button" name="partners"
      className={this.state.article.partners.includes(`${partner.name}`) ? 'TagCard TagCardSelected' : 'TagCard'}
      value={partner.name}
      onClick={this.handleChange}>
        {partner.name}
    </button>

    const PartnersCards = state.partners.allPartners.map(partner => <PartnerCard partner={partner} />)

    return (
    <div>
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
              <label>Lien externe vers un site du projet :<br/>
                <input type="text" name="projectLink" value={article.projectLink} onChange={this.handleChange} />
              </label>
              <label>URL de l'image de couverture:<br/>
                <input type="text" name="headerImage" value={article.headerImage} onChange={this.handleChange} />
              </label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Choisissez la section :
                  <select name="section" value={article.section} onChange={this.handleChange}>
                    <option value="">Choisissez la section :</option>
                    <option value="lab">LabRusch</option>
                    <option value="projets">Projets</option>
                  </select>
                </label>
              </div>
              <label>Tags de l'article :<br/></label>
              <div className='TagCardsContainer'>{TagCards}</div>

              <label>Partenaires du projet :<br/></label>
              <div className='TagCardsContainer'>{PartnersCards}</div>

              <label> Mettre l'article à la une :
                <button
                className={ article.hasStar === '1' ? 'hasStar' : 'hasNoStar' }
                style={{ cursor: 'pointer', fontSize: '1.1rem', padding: '0', margin: '0 0 0 10px' }}
                type="button" name="hasStar"
                onClick={this.handleChange}>
                ★</button>
              </label>

              <div className="addModule yellow">Ajouter un module :</div>
              <Container onDrop={this.handleDnd} className='DynamicInputs'>
                {dynamicInputs}
              </Container>
              <div id="buttons"
              style={{ backgroundColor: 'transparent', marginBottom: '20px' }}>
                {buttons}
              </div>
              <input className="draft" type="submit" name='isDraft' value="Enregistrer comme brouillon" onClick={this.handleSubmit} />
              <input className="submit" type="submit" value="Publier l'article" />
              <div className='errorPost'>{this.state.errorPost}</div>
            </form>
          </div>
        </div>
        <div className="item-right ModaleBlockPreview">
          <Modale article={article} />
        </div>
      </div>
    </div>
    )
  }
}

export default ArticleForm
