import React from 'react'
import './css/RedirectingBlockToAllArticles.css'
import { Link } from '@reach/router'

const RedirectingBlockToAllArticles = () => {
  return (
    <Link to='/lab'>
      <div className="RedirectingBlockToAllArticles">
        <div className="arrow">→</div>
        <h6 className="darkgrey">Voir tous les articles</h6>
      </div>
    </Link>
  )
}

export default RedirectingBlockToAllArticles
