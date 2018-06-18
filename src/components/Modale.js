import React from 'react'
import './css/Modale.css'

const Modale = ({ article }) => {

  return (
    <div style={{ background: `center / 100% url(${article.headerImage})` }}>
      <div className="ModaleHeader FilterBlack">
        <h2 className="green">
          {article.title}
        </h2>
        <h3>
          {article.shortDescription}
        </h3>
      </div>
    </div>
  )
}

export default Modale

