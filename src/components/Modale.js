import React from 'react'
import './css/Modale.css'
import store from '../store.js'

const Modale = ({ article, displayModale }) => {

  return (
    <div className="ModaleBlock" style={{ display: `${displayModale}` }}>
      <button className="closeModaleBtn" onClick={() => store.dispatch({ type: 'CLOSE_MODALE' })}>✕</button>
      <div style={{ background: `center / 100% url(${article.headerImage})` }}>
        <div className="FilterBlack">
          <h2 className="green">
            {article.title}
          </h2>
          <h3>
            {article.shortDescription}
          </h3>
        </div>
      </div>
        <p>
          {article.content}
        </p>
    </div>
  )
}

export default Modale

