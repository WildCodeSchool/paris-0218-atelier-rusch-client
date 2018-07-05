import React from 'react'
import './css/Modale.css'
import { Link } from "@reach/router"

const toHTML = {
  h2: ({ value }) => <h4>{value}</h4>,
  p: ({ value }) => <p>{value}</p>,
  blockquote: ({ value }) => <blockquote className='quote'>{value}</blockquote>,
  imgs: ({ value }) => value.split(',').map((url, i) => <img key={i} src={url} alt='' />),
}

const Element = ({ element }) => toHTML[element.type](element)


const Modale = ({ article, displayModale }) => {

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

  return (
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
          <p className="smallLink">
            Site du projet
          </p>
        </div>
      </div>
      {content}
    </div>
  )
}

export default Modale

