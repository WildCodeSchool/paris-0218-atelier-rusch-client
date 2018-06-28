import React from 'react'
import './css/Modale.css'
import { Link } from '@reach/router'

const Modale = ({ article, displayModale }) => {
  // const reversedPathname = window.location.pathname.split('').reverse()
  // const index = reversedPathname.indexOf('/')
  // const parentContextPath = reversedPathname.slice(index + 1).reverse().join('')

  const parentContextPath = window.location.pathname.replace(/\d+$/, '')

  return (
    <div className="ModaleBlock" style={{ display: `${displayModale}` }}>
      <Link className="closeModaleBtn" to={parentContextPath}><div className="closeModaleBtn">✕</div></Link>
      <div className="ModalePic" style={{ background: `center / cover no-repeat url(${article.headerImage})` }}>
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
      <p>
        {article.content}
      </p>
    </div>
  )
}

export default Modale
