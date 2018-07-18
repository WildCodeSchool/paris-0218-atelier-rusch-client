import React from 'react'
import './css/RedirectingBlockToAllArticles.css'
import { Link } from '@reach/router'

// const getPathName = window.location.pathname.replace(/\/\d+$/, '')
// const getSection = getPathName.slice(1, getPathName.length)
// console.log(getSection)

const RedirectingBlockToAllArticles = ({ section }) => {
  return (
    <Link to={`/${section}`}>
      <div className="RedirectingBlockToAllArticles">
        <div className="arrow">→</div>
        <h6 className="darkgrey">Voir tous les articles</h6>
      </div>
    </Link>
  )
}

export default RedirectingBlockToAllArticles
