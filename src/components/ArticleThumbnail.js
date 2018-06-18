import React from 'react'
import store from '../store.js'
import { loadModale } from '../actions.js'
import './css/ArticleThumbnail.css'

const ArticleThumbnail = ({ article, index, className }) => {
  return (
    <div className={className} style={{ zIndex: index }} onClick={event => store.dispatch(loadModale(article.id))}>
      <h6>
        {article.section}
      </h6>
      <h5>
        {article.title}
      </h5>
      <h6>
        {article.createdAt}
      </h6>
    </div>
  )
}

export default ArticleThumbnail
