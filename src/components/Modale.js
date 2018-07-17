import React from 'react'
import './css/Modale.css'
import { Link } from "@reach/router"
import store from '../store.js'
import Partenaire from './Partenaire.js'
import ArticleThumbnail from './ArticleThumbnail.js'
import RedirectingBlockToAllArticles from './RedirectingBlockToAllArticles.js'

const toHTML = {
  h2: ({ value }) => <h4>{value}</h4>,
  p: ({ value }) => <p>{value}</p>,
  blockquote: ({ value }) => <blockquote className='quote'>{value}</blockquote>,
  caption: ({ value }) => <p className='caption'>{value}</p>,
  abstract: ({ value }) => <p className='abstract'>{value}</p>,
  imgs: ({ value }) => value.split(',').map((url, i) => <img key={i} src={url} alt='' />),
}

const Element = ({ element }) => toHTML[element.type](element)

const Modale = ({ article }) => {

  let treatedContent = ''

  if (typeof article.content === "string") {
    treatedContent = JSON.parse(article.content)
  }
  else {
    treatedContent = article.content
  }

  const content = treatedContent
    .map((element, i) => <Element key={i} element={element} />)

  const parentContextPath = window.location.pathname.replace(/\/\d+$/, '')

  const state = store.getState()

  const articles = state.articles.allArticles

  const articleThumbnails = articles
    .filter(article => article.hasStar === '0')
    .slice(0, 3)
    .map((article, index) => <ArticleThumbnail key={article.id} article={article} index={index} className="ArticleThumbnailClassic" />)

  const getArticlePartners = article.partners

  const getPartners = array => state.partners.allPartners
    .filter(el => el.name === array.find(elem => elem === el.name))

  const partners = getPartners(getArticlePartners)
    .map(partner => <Partenaire partner={partner} />)

  const articlesSuggestions =
  	<div className="ArticlesBlock">
  		<div className='articleSuggestion'>
  		<h4 style={{ margin: '0 0 4rem 5rem'}}>Ceci pourrait aussi vous intéresser :</h4></div>
  		{articleThumbnails}
  		<RedirectingBlockToAllArticles />
  	</div>

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link className="closeModaleBtn" to={parentContextPath}><div className="closeModaleBtn">✕</div></Link>
        <div className="ModalePic" style={{ background: `center / cover no-repeat url(${article.headerImage})`}}>
          <div className="ModaleHeader FilterBlack">
            <h2 className="green">
              {article.title}
            </h2>
            <h3>
              {article.shortDescription}
            </h3>
            <a href={article.projectLink} target='_blank'>
              <p className="smallLink">
                {article.projectLink === '' ? '' : 'Lien du projet'}
              </p>
            </a>
          </div>
        </div>
        <div style={{ position: 'sticky', top: '-1px', backgroundColor: '#fbd052', padding: '1.5rem 10rem 2rem 15rem', width: 'calc(100vw - 25rem)', display: 'flex', flexWrap: 'wrap' }}>
          <h6 style={{ width: 'calc(100vw - 25rem)', margin: '1rem 0 1.5rem 0', fontWeight: '800' }}>Conception participative d'espace Massy Opéra</h6>
          <h6 style={{ width: 'calc(50vw - 12.5rem)', margin: '0.3rem 0' }}><u>Client</u> : Ville de Massy</h6>
          <h6 style={{ width: 'calc(50vw - 12.5rem)', margin: '0.3rem 0' }}><u>Date</u> : De janvier à juillet 2017</h6>
          <h6 style={{ width: 'calc(50vw - 12.5rem)', margin: '0.3rem 0' }}><u>Lieu</u> : Square de Massy Opéra</h6>
          <h6 style={{ width: 'calc(50vw - 12.5rem)', margin: '0.3rem 0' }}><u>Type</u> : Chantier participatif</h6>
        </div>
        {content}
      </div>
      {article.partners.length === 0 ? '' : <h4>Nos partenaires sur ce projet :</h4>}
      {!partners
        ? 'Loading'
        : <div className="PartenairesContainer">{partners}</div>}
      {window.location.pathname.includes('admin') ? '' : articlesSuggestions}
    </div>
  )
}

export default Modale
