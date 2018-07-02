import React from 'react'
import './css/Modale.css'
import store from '../store.js'
import { Link, redirectTo } from "@reach/router"

const toHTML = {
  h2: ({ value }) => <h4>{value}</h4>,
  p: ({ value }) => <p>{value}</p>,
  blockquote: ({ value }) => <blockquote className='quote'>{value}</blockquote>,
  // img: ({ url }) => <img src={url} />,
  imgs: ({ value }) => value.split(',').map((url, i) => <img key={i} src={url} />),
}

const Element = ({ element }) => toHTML[element.type](element)


const Modale = ({ article, displayModale }) => {

  // const reversedPathname = window.location.pathname.split('').reverse()
  // const index = reversedPathname.indexOf('/')
  // const parentContextPath = reversedPathname.slice(index + 1).reverse().join('')
  // if (typeof article.content === "string")
  //   JSON.parse(article.content)
  console.log("COUCOU", article.content)
  console.log("baare ouate", JSON.parse(article.content))

  const parseContent = JSON.parse(article.content)

  const content = parseContent
    .map((element, i) => <Element key={i} element={element} />)


  const parentContextPath = window.location.pathname.replace(/\/\d+$/, '')

  return (
    <div className="ModaleBlock">
      <Link className="closeModaleBtn" to={parentContextPath}><div className="closeModaleBtn">✕</div></Link>
      <div className="ModalePic" style={{ background: `center / cover no-repeat url(${article.headerImage})`}}>
        <div className="ModaleHeader FilterBlack" style={{ padding: '0.1rem 0.75rem' }}>
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

