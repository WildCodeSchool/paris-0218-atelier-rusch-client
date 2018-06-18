import React from 'react'
import './css/Modale.css'
import store from '../store.js'

const Modale = ({ article, displayModale }) => {

  return (
    <div className="ModaleBlock" style={{ display: `${displayModale}` }}>
      <button className="closeModaleBtn" onClick={() => store.dispatch({ type: 'CLOSE_MODALE' })}>✕</button>
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
        <p>
          {article.content}
        </p>
    </div>
  )
}

export default Modale

