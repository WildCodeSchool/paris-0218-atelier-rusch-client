import React from 'react'
import './css/Modale.css'

const Modale = ({ article }) => {

  return (
    <div>
      <h2>
        {article.title}
      </h2>
      <h3>
        {article.shortDescription}
      </h3>
      <p className="smallLink">
      Site du projet</p>
    </div>
  )
}

export default Modale

