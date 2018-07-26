import React from 'react'
import './css/RedirectingBlockToAllArticles.css'
import { Link } from '@reach/router'
import ArrowGif from './img/dessin-rusch-animé.gif'

const RedirectingBlockToAllArticles = ({ section }) => {
  return (
    <Link to={`/${section}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="RedirectingBlockToAllArticles">
        <div className="arrow">
          <img className='arrowGif' src={ArrowGif} alt="gif arrow" />
        </div>
        <h6 className="darkgrey">Voir tous les articles</h6>
      </div>
    </Link>
  )
}

export default RedirectingBlockToAllArticles
