import React from 'react'
import store from '../store.js'
import './css/ArticleThumbnail.css'
import { Link } from '@reach/router'


const ArticleThumbnail = ({ article, index, className, displayModale }) => {
  return (
    <Link to={String(article.id)}>
      <div className={className} style={{ zIndex: index }}>
        <h6>
          {article.tags}
        </h6>
        <h5>
          {article.title}
        </h5>
        <h6>
          {article.createdAt}
        </h6>
      </div>
    </Link>
  )
}

export default ArticleThumbnail
